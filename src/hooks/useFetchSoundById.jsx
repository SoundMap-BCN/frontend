export async function useFetchSoundById(id) {
  const res = await api.get(`/sounds/${id}`);
  return res.data;
}
