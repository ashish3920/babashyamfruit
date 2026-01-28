function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu').classList.remove('show');
  });
});

<!-- TOGGLE SCRIPT -->

function toggleBox(id) {
  const box = document.getElementById(id);
  box.style.display = box.style.display === "grid" ? "none" : "grid";
}
