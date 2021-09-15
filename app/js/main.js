$(function(){
     
    $('.slider-discont__list').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/content/icons/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/content/icons/right.svg" alt=""></button>',

        responsive: [
            {
              breakpoint: 1600,
              settings: {
                    arrows: false,
                    dots: true,
              }  
                
            }
        ]
    });

    $('.brands__list').slick({
        arrows: false,
        dots: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('.catalog__select--style').styler({

    })

    //filter-btn 
    $('.catalog__main-btn--filter').on('click', function() {
      $('body').addClass('overlay');
      $('.catalog__filters').addClass('catalog__filters--show')
    })

    $('.wrapper').on("click", function(e) {
      $('body').removeClass('overlay');
      $(".catalog__filters").removeClass("catalog__filters--show"); 
    });

    $('.catalog__filters-close').on('click', function(){
      $('body').removeClass('overlay');
      $(".catalog__filters").removeClass("catalog__filters--show"); 
    })

    // select-catalog 

    $('.jq-selectbox__select').on('click', function() {
      $(this).toggleClass('jq-selectbox__select--active')
    })
   

    // shop-btn 
    $('.catalog__main-btn--list, .catalog__main-btn--grid').on('click', function () {
      $('.catalog__main-btn').removeClass('catalog__main-btn--active');
      $(this).addClass('catalog__main-btn--active');
    });

    //shop filter (list/grid)
    $('.catalog__main-btn--list').on('click', function() {
      $('.product-card').addClass('product-card--list');
      $('.catalog__content').addClass('catalog__content--list')
    })

    $('.catalog__main-btn--grid').on('click', function() {
      $('.product-card').removeClass('product-card--list');
      $('.catalog__content').removeClass('catalog__content--list')
    })

    $(window).on('load resize', function() {
      if($(window).width() < 1200) {
        $('.product-card').removeClass('product-card--list')
        $('.catalog__content').removeClass('catalog__content--list')
      }
    });

    // scroll header
    window.onscroll = function showHeader() {
        let header = document.querySelector('.header__bottom')

        if(window.pageYOffset > 52) {
            header.classList.add('header__bottom--scroll')
        } else {
            header.classList.remove('header__bottom--scroll')
        }
    };
    // basket
    $('.header__user-link--card').on('click', function(event) {
        if ($(window).width()> 576) {
          $('body').addClass('overlay');
        };
        $('.basket').addClass('basket--show');

    });
    
    $('.btn-close').on('click', function(event) {
        event.preventDefault();
        $('.basket').removeClass('basket--show');
        $('body').removeClass('overlay');
    });

    $('.wrapper').on("click", function(e) {
          $('body').removeClass('overlay');
          $(".basket").removeClass("basket--show"); 
      });
    
      //burger-menu
    $('.burger-menu').on('click', function(event) {
        event.preventDefault();   
        $('.menu-mob').addClass('menu-mob--show');
        $('body').addClass('overlay-mob');
    });
    
    $('.menu-mob__btn').on('click', function(event) {
        event.preventDefault();
        $('.menu-mob').removeClass('menu-mob--show');
        $('body').removeClass('overlay-mob');
    });

    $(document).on("click", function(e) {
        if (($(e.target).is(".menu-mob--show") === false)
        &&
        ($(e.target).hasClass('burger-menu') === false)
        ) {
          $('body').removeClass('overlay-mob');
          $(".menu-mob").removeClass("menu-mob--show");
        }
      });

    $('.header__user-link--search').on('click', function(event) {
        event.preventDefault();
        $('.header__search').toggleClass('header__search--showw');
    });
    
    $('.header__btn-search').on('click', function(event) {
        event.preventDefault();
        $('.header__search').removeClass('header__search--showw');
    });

    $(document).on("click", function(e) {
        if (($(e.target).is(".header__search--showw") === false)
        &&
        ($(e.target).hasClass('js-search') === false)
        && (!$(e.target).hasClass('header__user-link--search'))
        ) {
          $(".header__search").removeClass("header__search--showw");
        }
      });

    // catalog dropdown
    $('.header__catalog').hover(() => {
      if ($(window).width() > 992) {
      $('.header__catalog-list').slideToggle(350);
      }
    })  

    // dropdown - catalog-page
    $('.catalog__box-title').click(function(event) { 
      $(this).toggleClass('catalog__box-title--active').next().slideToggle(300);
    })

    // range-slider 
    var $range = $(".catalog__input-range"),
    $inputFrom = $(".catalog__input-from"),
    $inputTo = $(".catalog__input-to"),
    instance,
    min = 0,
    max = 1000,
    from = 0,
    to = 0;

    $range.ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        from: 0,
        to: 1000,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
      from = data.from;
        to = data.to;
        
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);	
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");
        
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
        
        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");
        
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
        
        instance.update({
            to: val
        });
    });



    // Search atribyte
    $(window).on('load resize', function() {
        if ($(window).width() < 992) {
            $('input[type="search"]').attr('placeholder', 'Я ищу ...');
        } else {
            $('input[type="search"]').attr('placeholder', 'Найти в магазине ...');
        }
    });

    // Atribyte logo
    $(window).on('load resize', function() {
      if ($(window).width() < 576) {
          $('.header__logo-img').attr('width', '40');
          $('.header__logo-img').attr('height', '40');
      } else {
          $('.header__logo-img').attr('width', '200');
          $('.header__logo-img').attr('height', '60');
      }
  });
  // search btn
    $(document).on('click', function(e) {
        if (!$(e.target).hasClass('header__search')){
            $('.header__search').removeClass('header__search--show');
        }
    });
   
    // basket + - 
    $('.basket-card__btn--minus').on("click", function(e) {
      let count = $(this).parent().children('.basket-card__num').val()
      if (+count > 1) {
        $(this).parent().children('.basket-card__num').val(count - 1);
      }
    });

    $('.basket-card__btn--plus').on("click", function(e) {
      let count = $(this).parent().children('.basket-card__num').val()
      $(this).parent().children('.basket-card__num').val(+count + 1);
    });

    $('.pagination__link--noclick').on("click", function(e) {
        event.preventDefault(); 
    })
    
  //  mixitup local 
    let containerEl1 = document.querySelector ('.top-product');
    let containerEl2 = document.querySelector ('.promo');
    
    let config = {
        controls: {
            scope: 'local'
        }
    }; 

    var mixer = mixitup(containerEl1, config);
    var mixer1 = mixitup(containerEl2, config);
})