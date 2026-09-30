-- ============================================================
-- Migration: base_caption, atomic display_id counter, display_id column
-- Execute em ordem no Supabase SQL Editor
-- ============================================================

-- 1. Coluna base_caption na tabela instagram_accounts
alter table instagram_accounts
  add column if not exists base_caption text;

-- 2. Tabela de contador atômico + função RPC
create table if not exists account_display_counters (
  instagram_account_id uuid primary key references instagram_accounts(id) on delete cascade,
  last_number integer not null default 0
);

create or replace function next_display_id(p_account uuid)
returns integer language plpgsql as $$
declare
  v_next integer;
begin
  insert into account_display_counters (instagram_account_id, last_number)
  values (p_account, 1)
  on conflict (instagram_account_id)
  do update set last_number = account_display_counters.last_number + 1
  returning last_number into v_next;
  return v_next;
end; $$;

-- 3. Coluna display_id em spotteds + índice único
alter table spotteds
  add column if not exists display_id integer;

create unique index if not exists spotteds_account_display_uniq
  on spotteds (instagram_account_id, display_id) where display_id is not null;

-- 4. Semente do contador (página começa do zero → 0)
insert into account_display_counters (instagram_account_id, last_number)
select id, 0 from instagram_accounts where username = 'lavras_spotted'
on conflict (instagram_account_id) do update set last_number = excluded.last_number;

-- 5. Popular base_caption por cidade (ajuste usernames se necessário)
update instagram_accounts
set base_caption = '#spotted #lavras' || chr(10) || chr(10) || '@' || username
where username = 'lavras_spotted';

update instagram_accounts
set base_caption = '#spotted #unicamp' || chr(10) || chr(10) || '@' || username
where username = 'unicamp_spotted';

update instagram_accounts
set base_caption = '#spotted #limeira' || chr(10) || chr(10) || '@' || username
where username = 'limeira_spotted';

-- 6. Conferir resultado
select username, display_name, base_caption, last_number
from instagram_accounts
left join account_display_counters on instagram_accounts.id = account_display_counters.instagram_account_id
order by username;