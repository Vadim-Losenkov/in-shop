$(function () {

  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
  })

  const tab = $('.tab')

  tab.on('click', function (e) {
    e.preventDefault()

    $($(this).siblings()).removeClass('tab--active')
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active')

    $(this).addClass('tab--active')
    $($(this).attr('href')).addClass('tabs-content--active')
  })

  const fav = $('.product-item__favorite')
  $('.product-item__favorite').on('click', function(){
    $(this).toggleClass('product-item__favorite--active')
  })

  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
  })

  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', function() {
    $(this).toggleClass('filter__item-drop--active')
    $(this).next().slideToggle(200)
  })

  $(".js-range-slider").ionRangeSlider({
    grid: false,
    type: 'double',
    min: 100000,
    max: 500000,
    from: 140000,
    to: 400000
  })
})