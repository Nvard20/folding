$(document).ready(function() {
  setTimeout(function() {
    $('.start__side-l').animate({left:0});
    $('.start__side-r').animate({right:0});
    $('.start__btm').animate({bottom:0});
  }, 500);

  if($(window).width() <= 1100) {
    $('#hidden1 .hidden__col6:last-child .hidden__hh').css('width', '100%');
    $('#hidden1 .hidden__col > *').unwrap();
  }

  // Меню для юзера по типу (архитектор, клиент, партнёр)
  $('menu.user_type a').on('click', function(e){
    e.preventDefault();
    var menu_target_id = $(this).attr('data-id');
    $('.list_menu menu, .user_type a').removeClass('active');
    $("#" + menu_target_id).addClass('active');
    $(this).addClass('active');
  });
  $('menu.user_type a').on({
    mouseenter: function () {
      var hov_id = $(this).attr('data-id');
      if (hov_id === 'arch'){
        $('.warning_menu').css({ 'top': '-60px', 'left': '8%', 'right': 'unset' }).addClass('opac_vis');
      }
      if(hov_id === 'partners'){
        $('.warning_menu').css({ 'top': '-60px', 'right': '8%', 'left': 'unset' }).addClass('opac_vis');
      }
    },
    mouseleave: function () {
      $('.warning_menu').removeClass('opac_vis');
      setTimeout(function(){
        $('.warning_menu').css({ 'left':'-50%', 'right': 'unset'});
      }, 1800);
    }
  });

  $('.tovar7__tab').click(function() {
    $('.tovar7__tab.active').removeClass('active');
    $(this).addClass('active');
    $('.tovar7__content.active').removeClass('active');
    $('.tovar7__content[data-id=' + $(this).attr('data-id') + ']').addClass('active')
  });

  $('[data-js="menuOpen"]').click(function() {
    if($('.start__menu').hasClass('on')) return true;
    $(this).toggleClass('on');
    $('.start__menu').toggleClass('on');
    $('#hidden1').toggleClass('on');
    return false;
  });

  $('[data-js="lkOpen"]').click(function() {
    if($('.start__menu').hasClass('on')) return true;
    $(this).toggleClass('on');
    $('.start__menu').toggleClass('on');
    $('.start__menu').toggleClass('on2');
    $('#hidden2').toggleClass('on');
    return false;
  });

  $('.start__menu').click(function() {
    if($('.start__menu').hasClass('on')) {
      $('.start__menu').removeClass('on');
      $('.start__menu').removeClass('on2');
      $('#hidden2, #hidden1').removeClass('on');
      $('[data-js="menuOpen"]').removeClass('on');
      return false;
    }
    
  });

  $('[data-hide-trigger]').click(function() {
    $(this).toggleClass('on');
    $(this).closest('[data-hide-parent]').find('[data-hide-text]').slideToggle();
    return false;
  });

  $('.btn-state').each(function() {
    var width = $(this).attr('data-opened') / $(this).attr('data-all') * 100;
    if(width > 100) width = 100;
    $(this).next('.btn-bg').css('width', width + '%');
  });

  $('.tovar__el--video').click(function() {
    $(this).addClass('on')
  });

  function closeGallery() {
    $('.modalka').removeClass('on');
    
    setTimeout(function() {
      $('.modalka__bg').removeClass('on');
    },300) 
  }

  $('[data-js="openGallery"]').click(function() {
    $('.modalka__bg').addClass('on');
    setTimeout(function() {
      $('.modalka').addClass('on');
    },300) 
    return false;
  });


  $('.modalka').click(function(e) {
    if($(e.target).hasClass('modalka__close')) closeGallery();
    else if($(e.target).hasClass('fotki__slide')) return true;
    else if($(e.target).closest('.fotki__slide').get(0)) return true;
    else if($(e.target).hasClass('slick-arrow')) return true;
    else if($(e.target).hasClass('slick-dots')) return true;
    else if($(e.target).closest('.slick-dots').get(0)) return true;
    else closeGallery();
  });

  $('.li-parent').mouseenter(function() {
    $('.header menu').addClass('on');
  });

  $('.li-parent').mouseleave(function() {
    $('.header menu').removeClass('on');
  });

  $('.pop_call').on('click', function(e){
    e.preventDefault();
    $('#call_popup, .modalka__bg').addClass('on');
  });
  $('.modalka__close').on('click', function (){
    $('.modalka__bg').removeClass('on');
    $('#call_popup, #proj_pop_img, #proj_pop_video').removeClass('on');
  });
  $('.modalka__close2').on('click', function () {
    $('.modalka__bg').removeClass('on');
    $('#proj_pop_img, #proj_pop_video').removeClass('on');
  });

  $('.file_input').on('click', function () {
    $(this).parent('div').find('input[type="file"]').click();
  });

  $('body').click(function(e) {
    if($(".ks-select.opened").get(0)) {
      var parent = e.target;
      if(!$(parent).hasClass("opened")) {
        while(!$(parent).hasClass("opened")) {
          if($(parent).hasClass("opened") || parent.tagName == 'BODY') break;
          parent = parent.parentNode;
        }
        if(!$(parent).hasClass("opened")) {
          $(".ks-select.opened").find(".ks-select__block").toggle();
          $(".ks-select.opened").removeClass("opened");
        }
      }
      
    }

    if($('.filtering-wrap.on').get(0) && !$(e.target).hasClass('filtering-wrap') && !$(e.target).closest('.filtering-wrap').get(0)) {
      $('.filtering-wrap.on').removeClass('on');
      $('body').removeClass('on');
    }

    if($(e.target).hasClass('ks-select__current') || $(e.target).closest('.ks-select__current').get(0)) {
      if(!$(e.target).hasClass('ks-select__clear')) {
        var el = $(e.target);
        var parent = $(e.target).closest('.select');
        if($(e.target).closest('.ks-select__current').get(0)) el = $(el).closest('.ks-select__current');
        if($(".ks-select.opened").get(0) && $(".ks-select.opened").get(0) !== $(el).closest(".ks-select").get(0)) {
          $(parent).find(".ks-select__block").toggle();
          $(parent).toggleClass("opened");
        }
        $(el).next(".ks-select__block").toggle();
        $(el).closest(".ks-select").toggleClass("opened");
      }
      
    }

    else if($(e.target).hasClass('ks-select__item')) {
      var parent = '';
      parent = $(e.target).closest('.select');
      if($(parent).get(0) && $(parent).attr('data-multi') == 'yes') {
        $(e.target).toggleClass("active");
        if(!$(e.target).closest(".ks-select__block").find(".ks-select__item.active").get(0)) {
          $(parent).find(".ks-select__current span").text('Не выбрано');
        } else {
           $(parent).find(".ks-select__current span").text($(e.target).closest(".ks-select__block").find(".ks-select__item.active").text());
        }
        
      } else {
        $(e.target).closest(".ks-select__block").find(".ks-select__item.active").removeClass("active");
        $(e.target).addClass("active");
        var str = $(e.target).closest(".ks-select__block").find(".ks-select__item.active").text();
        var txt = str.split('<')[0];
        $(parent).find(".ks-select__current span").text(txt);
        
        $(e.target).closest(".ks-select__block").toggle();
        $(e.target).closest(".ks-select").removeClass("opened");
      }
    }
  });

  $("[data-href]").each(function() {
    $(this).click(function() {
      $('html, body').animate({ scrollTop: $($(this).attr("data-href")).offset().top }, 500);
      return false;
    })
  });

  $('#img_block .projects__el').on('click', function(){
    $('.modalka__bg, #proj_pop_img').addClass('on');
  });
  $('#video_block .projects__el').on('click', function () {
    $('.modalka__bg, #proj_pop_video').addClass('on');
  });
  $('.projects__tab').on('click', function (e) {
    e.preventDefault();
    $('.projects__tab, .projects__els').removeClass('active');
    $(this).addClass('active');
    var proj = $(this).attr('data-block');
    $('#'+proj).addClass('active');
  });

  $('a.projects__filter').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('pf_off');
    $('.filters__opened').removeClass('pf_off');
    $('.projects__sort').hide();
  });
  $('a.filters__opened_close, .fo__accept').on('click', function (e) {
    e.preventDefault();
    $('a.projects__filter').removeClass('pf_off');
    $('.filters__opened').addClass('pf_off');
    $('.projects__sort').show();
  });
  $('.filters__opened_clean').on('click', function () {
    $(this).closest('.filters__opened').find('.fo__item').each(function(){
      $(this).find('.ks-select__list').each(function () {
        $(this).find('.ks-select__item:first').click();
        $(this).find('.ks-select__item:first').click();
      });
    });
  });

  $(".tel-mask").inputmask("+7 (999) 999-99-99"); 
  $(".tel-mask").attr("placeholder", '+7 (___) ___-__-__');


// SCROLL ON PAGE
  $(".scroll").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 300);
  });


  $(window).scroll(function() {
    if($(window).scrollTop() > 0) {
      $('.header').addClass('fixed');
    } else $('.header').removeClass('fixed')
  });

  if($(window).scrollTop() > 0) {
      $('.header').addClass('fixed');
    } else $('.header').removeClass('fixed');


// MOBILE_MENU
  $(".toggle-menu").click(function() {
    $(this).toggleClass("on");
    $("header .menu").slideToggle();
    return false;
  });

  var width = $(window).width();
  $(window).resize(function(){
    if($(window).width() != width){
      heightses();
      width = $(window).width();
    }
  });


  // SLICK


  if($('.use__gallery').get(0)) {

    if($('.use__bg').get(0) && $('.use__count').get(0)) {
      var count = 3;
      var other = $('.use__gallery-slide').length - count;
      $('.use__count').text('+' + other);
    }

    $('.use__gallery').animate({
      opacity:1
    })
    var slides = 3;
    if($('.use__gallery').closest('.use--mod').get(0)) slides = 2;
    $(".use__gallery").slick({
      dots:true,
      variableWidth: true,
      slidesToScroll: 1,
      slidesToShow:slides,
      infinite:false,
      touchThreshold: 15,
       responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
      ]
    });
  }


  if($('.use__gallery2').get(0)) {
    $('.use__gallery2').animate({
      opacity:1
    });
    $(".use__gallery2").slick({
      slidesToScroll: 1,
      centerMode: true,
      slidesToShow: 9,
      centerPadding: '0',
      touchThreshold: 65,
       responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 7
          }
        },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3
        }
      }
      ]
    });
  }


  if($('.fotki').get(0)) {
    $('.fotki').animate({
      opacity:1
    });
    $(".fotki").slick({
      slidesToScroll: 1,
      slidesToShow: 3,
      touchThreshold: 15,
      rows: 0,
      dots:true
    });
  }

  if($('.novosti-slider').get(0)) {
    $('.novosti-slider').animate({
      opacity:1
    });
    $(".novosti-slider").slick({
      slidesToScroll: 1,
      slidesToShow: 1,
      rows: 0,
      fade: true,
      dots:true
    });
  }


  if($('.start__slider').get(0)) {
    $('.start__slider').animate({
      opacity:1
    });
    $(".start__slider").slick({
      slidesToScroll: 1,
      slidesToShow: 1,
      rows: 0,
      fade: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000
    });
  }

  $('.proj_fotki').slick({
    slidesToScroll: 1,
    centerMode: true,
    slidesToShow: 3,
    arrows: false,
    touchThreshold: 65,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  

  window.addEventListener("orientationchange", function() {
    heightses();
  }, false);


  heightses();


  function heightses() {
     
  }

})