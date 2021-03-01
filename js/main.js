$(function () {
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 968,
        settings: {
          arrows: false
        }
      }
    ]
  })

  const tab = $('.tab')

  tab.on('click', function (e) {
    e.preventDefault()

    $($(this).siblings()).removeClass('tab--active')
    $($(this).parent().parent().siblings().find('div')).removeClass('tabs-content--active')

    $(this).addClass('tab--active')
    $($(this).attr('href')).addClass('tabs-content--active')
  })

  const fav = $('.product-item__favorite')
  fav.on('click', function(){
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

  const filterBtnActiveClass = 'catalog__filter-button--active'
  const filterBtnLine = $('.catalog__filter-btnline')
  const filterBtnGrid = $('.catalog__filter-btngrid')
  const productItem = $('.product-item__wrapper')

  filterBtnGrid.on('click', function() {
    $(this).addClass(filterBtnActiveClass)
    filterBtnLine.removeClass(filterBtnActiveClass)
    productItem.removeClass('product-item__wrapper--list')
  })

  filterBtnLine.on('click', function() {
    $(this).addClass(filterBtnActiveClass)
    filterBtnGrid.removeClass(filterBtnActiveClass)
    productItem.addClass('product-item__wrapper--list')
  })

  $(".js-range-slider").ionRangeSlider({
    grid: false,
    type: 'double',
    min: 100000,
    max: 500000,
    from: 140000,
    to: 400000
  })
  
  $('.rate-yo').rateYo({
    ratedFill: '#1c62cd',
    spacing: '7px',
    normalFill: '#c4c4c4',
    readOnly: true,
  })
  
  $('.menu__btn').on('click', () => {
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
    $('.menu__btn').toggleClass('active')
  })
})