const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function fetchUser() {
  const resp = await fetch(`${BASE_URL}/api/v1/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (resp.ok) {
    const user = await resp.json();
    return user;
  }
}

// const user = client.auth.user();

export async function createUser(email, password) {
  const resp = await fetch(`${BASE_URL}/api/v1/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });
  console.log("resp", resp);
  const data = await resp.json();
  if (resp.ok) {
    await loginUser(email, password);
  } else {
    // eslint-disable-next-line no-console
    console.error(data.message);
  }
}
export async function loginUser(email, password) {
  const resp = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });
  const data = await resp.json();
  if (!resp.ok) {
    console.error(data.message);
    // eslint-disable-next-line no-console
  }
}

export async function signOut() {
  const resp = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
    method: "DELETE",
    credentials: "include",
  });
  if (resp.ok) {
  }
}
