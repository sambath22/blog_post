function logout() {
  localStorage.removeItem("token");
  window.location.href = "page/login.html";
}
