const menu_button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

menu_button.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else {
        menu.classList.add('hidden');
    }
})