$(document).ready(()=>{
    $('.heroblock__button').click(() => {
        $('html, body').animate({
            scrollTop: $(".heroblock").next().offset().top  // класс объекта к которому приезжаем
        }, 1000);
    });    
});