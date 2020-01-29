var menu = document.querySelector(".header__menu-list");
menu.classList.remove("no-js");

document.querySelector(".hamburger").addEventListener('click', function() {
  if (menu.classList.contains('menu-close')) {
    menu.classList.remove('menu-close');
    menu.classList.add('menu-open');
  } else {
    menu.classList.add('menu-close');
    menu.classList.remove('menu-open');
  }
});

var links = document.querySelectorAll(".header__menu-link");

for (var i = 0; i <links.length; i++) {
  links[i].addEventListener('click', function() {
    menu.classList.add('menu-close');
  })
};


