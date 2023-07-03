
//JAVASCRIPT RESPONSAVEL PELO MENU DO SITE

var menu = document.querySelector('nav ul');
var menuIcon = document.querySelector('.menu-icon');

function abrirMenu() {
    menu.classList.toggle('open');
}

function fecharMenu() {
    menu.classList.toggle('open');
}