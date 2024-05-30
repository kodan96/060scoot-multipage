$(document).ready(() => {
    const questions = document.querySelectorAll('.faq_item');

    const menuToggle = () => {
        $('.open').toggle();
        $('.close').toggle();
        $('nav').slideToggle();
        $('.page_overlay').fadeToggle();
    }

    
    const answerToggle = (i) => {
        $('.faq_item--answer').eq(i).slideToggle();
        let img = $('.faq_item--question img').eq(i);
        if (img.css('transform') === 'none' || img.css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
            img.css('transform', 'rotate(180deg)');
        } else {
            img.css('transform', 'rotate(0deg)');
        }
    };
        
    









    $('.open, .close').on('click', () => {
        menuToggle();
    })

    questions.forEach((item, i) => {
        item.addEventListener('click', () => {
            answerToggle(i);
            
        })
    })
})