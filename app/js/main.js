$(function(){
     
    $('.slider-discont__list').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/right.svg" alt=""></button>',
    });

    let containerEl1 = document.querySelector ('[data-ref="container-1"]');
    let containerEl2 = document.querySelector ('[data-ref="container-2"]');
    
    let config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer = mixitup(containerEl1, config);
    var mixer1 = mixitup(containerEl2, config);
})