let btnMenu = document.querySelector('#btn-menu');

btnMenu.addEventListener('click', () => {
    let nav = document.querySelector('.navigation');
    let overlay = document.querySelector('.overlay');
    
    btnMenu.classList.toggle('btn-menu--active');
    nav.classList.toggle('navigation--show');
    overlay.classList.toggle('overlay--show');
    overlay.addEventListener('click', () => {
        btnMenu.classList.remove('btn-menu--active');
        nav.classList.remove('navigation--show');
        overlay.classList.remove('overlay--show');
    });
});