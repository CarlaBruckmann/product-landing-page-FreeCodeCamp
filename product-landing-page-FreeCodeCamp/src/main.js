function initMenuMobile(){
    let icon = document.querySelector('.icon');
    let menu = document.querySelector('.menu');
    let menuMobileLi = document.querySelectorAll('.menu li');

    function menuMobile(){
        icon.classList.toggle('icon-x');
        menu.classList.toggle('ativo');
    }

    icon.addEventListener('click', menuMobile);
    menuMobileLi.forEach((item) => {
        item.addEventListener('click', menuMobile);
    });
}

initMenuMobile();