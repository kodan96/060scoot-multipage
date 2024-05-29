$(document).ready(() => {


    const menuToggle = () => {
        $('.open').toggle();
        $('.close').toggle();
        $('nav').slideToggle();
        $('.page_overlay').fadeToggle();
    }









    $('.open, .close').on('click', () => {
        menuToggle();
    })
})