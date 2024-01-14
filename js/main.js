function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
  // const slider_menu = document.querySelector(".button_menu");
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

function showDialog() {
  const dialog = document.getElementById("login-dialog");
  dialog.showModal();
}
