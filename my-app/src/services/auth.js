const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function signOut() {
  const resp = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
    method: "DELETE",
    credentials: "include",
  });
  if (resp.ok) {
  }
}
