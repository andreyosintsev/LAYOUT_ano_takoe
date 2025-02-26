document.addEventListener('DOMContentLoaded', () => {
    const paymentStage1 = document.querySelector('.payment_stage1');
    const paymentStage2 = document.querySelector('.payment_stage2');

    if (!paymentStage1 || !paymentStage2) {
        console.warn('DOM: payment stages not found');
        return;
    }

    const paymentStage1Button = paymentStage1.querySelector('.form__button');

    if (!paymentStage1Button) {
        console.warn('DOM: payment stage 1 button not found');
        return;
    }

    paymentStage1Button.addEventListener('click', (e) => {
        console.log('pressed!');
        e.preventDefault();

        paymentStage1.classList.add('hidden');
        paymentStage2.classList.remove('hidden');
    });

    paginationItems = paymentStage2.querySelectorAll('.pagination-slider__items');

    if (paginationItems[0]) {
        paginationItems[0].addEventListener('click', () => {
            paymentStage1.classList.remove('hidden');
            paymentStage2.classList.add('hidden');
        })
    }
})
