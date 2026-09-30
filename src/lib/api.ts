const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const ACCOUNT_ID = process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT_ID!;

export interface SendSpottedResponse {
  success: boolean;
  messageId: string;
  dbId: string | null;
  imageUrl: string;
  status: string;
}

export async function sendSpotted(data: {
  message: string;
  fingerprint: string;
  image?: File;
}): Promise<SendSpottedResponse> {
  const form = new FormData();
  form.append("message", data.message);
  form.append("fingerprint", data.fingerprint);
  form.append("instagram_account_id", ACCOUNT_ID);
  if (data.image) {
    form.append("image", data.image);
  }

  const res = await fetch(`${API_URL}/api/spotted/send`, {
    method: "POST",
    body: form,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Falha ao enviar spotted");
  }

  return res.json();
}