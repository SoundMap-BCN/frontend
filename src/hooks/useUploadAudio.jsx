export async function useUploadAudio({ audioFile, title, description, latitude, longitude }) {
  const form = new FormData();

  form.append("audio", audioFile);

  form.append(
    "data",
    JSON.stringify({ title, description, latitude, longitude })
  );

  const res = await api.post("/sounds/upload", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
}
