export async function getUserInfo(email) {
    const response = await fetch(`/api/users?email=${email}`);
    const data = await response.json();
    return data;
  }