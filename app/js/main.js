$(function(){
     
    $('.slider-discont__list').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/right.svg" alt=""></button>',
    });

    var mixer = mixitup('.top-product__list');
})