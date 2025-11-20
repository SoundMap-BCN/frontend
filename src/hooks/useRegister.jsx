export async function useRegister(data) {
  const res = await api.post("/auth/register", data);
  return res.data;
}
