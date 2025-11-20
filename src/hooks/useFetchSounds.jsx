export async function useFetchSounds() {
  const res = await api.get("/sounds");
  return res.data;
}
