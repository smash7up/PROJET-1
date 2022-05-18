const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

document.getElementById("wina").onclick = function () {
  const age = prompt('Quel est votre âge ?');
  if (age >= '18') {
        window.open("https://www.winamax.fr/", '_blank');
  }
  else {
        window.open("https://www.jeux.fr/", '_blank');
}
    };