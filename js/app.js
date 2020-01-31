const $header = document.querySelector('header');
const $intLinks = document.querySelectorAll("ul li a[href^='#']");
const $toTop = document.querySelectorAll(".to-top")[0];
const $btnProjeto = document.querySelector('.btn-projeto');
const $navBar = document.querySelectorAll('.nav-bar')[0];
const $menu = document.querySelectorAll('.menu')[0];


/*header dinâmico que muda conforme o scroll */

window.addEventListener('scroll', toggleHeader, false);

function toggleHeader() {
  if (window.pageYOffset > 70 && $header.classList.contains('header-padrao')) {
    $header.classList.remove('header-padrao');
    $header.classList.add('header-modificado');
    $navBar.classList.remove('nav-bar-padrao');
    $navBar.classList.add('nav-bar-modificado');

  } else if (window.pageYOffset <= 70 && $header.classList.contains('header-modificado')) {
    $header.classList.remove('header-modificado');
    $header.classList.add('header-padrao');
    $navBar.classList.add('nav-bar-padrao');
    $navBar.classList.remove('nav-bar-modificado');

  }
}

/*Abrir e fechar menu hamburguer */
$menu.addEventListener('click', toggleMenu, false);
let isOpen = false;

function toggleMenu() {
  if (!isOpen) {
    $navBar.classList.add('menu-opened');
    isOpen = true;
  } else {
    $navBar.classList.remove('menu-opened');
    isOpen = false;
  }
}

$navBar.addEventListener('click', navClick, false);

function navClick(evt) {
  if (evt.target.tagName == 'A') {
    toggleMenu();
  }
}

















/*Scroll Suave */

function scrollToSection(event) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  //section.scrollIntoView({
  //  behavior: "smooth",
  //  block: "start"
  // });

  const topo = section.offsetTop - 70;

  window.scrollTo({
    top: topo,
    behavior: "smooth"
  });
}

$intLinks.forEach(link => {
  link.addEventListener("click", scrollToSection);

  $btnProjeto.addEventListener("click", scrollToSection);
});

/*botao que leva ao topo (scroll 0) */

window.addEventListener(
  "scroll",
  () => {
    if (window.pageYOffset > 840) {

      $toTop.classList.add("active");
    } else {
      $toTop.classList.remove("active");
    }
  },
  false
);

$toTop.addEventListener(
  "click",
  function (evt) {
    evt.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  },
  false
);