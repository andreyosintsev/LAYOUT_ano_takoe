document.addEventListener('DOMContentLoaded', () => {
    const popupPayment = document.querySelector('.payment-popup__container');

    if (!popupPayment) {
        console.warn('DOM: payment-popup not found');
        return;
    }

    const buttonShowPayment = document.querySelectorAll('.button_show-payment');

    buttonShowPayment.forEach(button => button.addEventListener('click', () => showPopupPayment(popupPayment)));
})

function showPopupPayment(popup) {
    if (!popup) {
        console.warn('DOM: popup not found');
        return;
    }

    popup.classList.remove('hidden');

    const body = document.querySelector('body');
    if (body) body.style.overflow = 'hidden';
}
