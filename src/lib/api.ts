export interface SendSpottedData {
  message: string;
  fingerprint?: string;
  image?: File;
  slug?: string;
  instagram_account_id?: string;
}

export interface SendSpottedResponse {
  success: boolean;
  messageId: number;
  dbId: string | null;
  imageUrl: string;
  status: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function sendSpotted(
  data: SendSpottedData
): Promise<SendSpottedResponse> {
  const formData = new FormData();
  formData.append("message", data.message);
  if (data.fingerprint) formData.append("fingerprint", data.fingerprint);
  if (data.image) formData.append("image", data.image);
  if (data.slug) formData.append("slug", data.slug);
  if (data.instagram_account_id) {
    formData.append("instagram_account_id", data.instagram_account_id);
  }

  const res = await fetch(`${API_URL}/api/spotted/send`, {
    method: "POST",
    body: formData,
  });

  const json = await res.json().catch(() => null);

  if (!res.ok || !json?.success) {
    throw new Error(json?.message || "Falha ao enviar o spotted.");
  }

  return json as SendSpottedResponse;
}
