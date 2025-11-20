export async function useCurrentUser() {
  const res = await api.get("/auth/me");
  return res.data;
}
