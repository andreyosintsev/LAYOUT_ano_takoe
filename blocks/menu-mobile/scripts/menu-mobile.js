document.addEventListener('DOMContentLoaded', () => {
    const menuMobile = document.querySelector('.menu-mobile');

    if (!menuMobile) {
        console.warn('DOM: menu mobile not found');
        return;
    }

    const menuMobileButton = document.querySelector('.menu-mobile-button');

    if (!menuMobileButton) {
        console.warn('DOM: menu mobile button not found');
        return;
    }

    const menuMobileClose = document.querySelector('.menu-mobile__close');

    if (!menuMobileClose) {
        console.warn('DOM: menu mobile close button not found');
        return;
    }

    const body = document.querySelector('body');

    menuMobileButton.addEventListener('click', () => {
        menuMobile.classList.remove('hidden');
        body.style.overflow = 'hidden';
    });

    menuMobileClose.addEventListener('click', () => {
        menuMobile.classList.add('hidden');
        body.style.overflow = 'auto';
    });
});
