var btnPopUp = document.getElementById('btnPopUp');
var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btnClose')

btnPopUp.addEventListener('click', openModal);

btnClose.addEventListener('click', closePopUp)

function openModal() {
    overlay.style.display = 'block';
}

function closePopUp() {
    overlay.style.display = 'none';
}