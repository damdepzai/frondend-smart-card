export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    // Authorization token in header 
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}
