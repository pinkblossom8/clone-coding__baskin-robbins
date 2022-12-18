function FamailySite__init() {
  $(".family-site").click(function () {
    $(".family-site").toggleClass("hover");
  });
}

function Header__init() {
  $(".menu-header__main-menu").mouseenter(function () {
    $(".menu-header").addClass("on");
  });

  $(".menu-header").mouseleave(function () {
    $(".menu-header").removeClass("on");
  });
}

function BannerSliderBox__init() {
  const swiper = new Swiper(".banner-slide .swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".banner-slide .swiper-pagination",
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: ".banner-slide .swiper-button-next",
      prevEl: ".banner-slide .swiper-button-prev"
    }
  });
}

function ScrollBanner__init() {
  // 스크롤 위치 확인 JS
  $(window).scroll(function () {
    let height = $(document).scrollTop();
    console.log(height);

    // 만약 height가 500 이상이라면 함수 실행해라
    if (height > 500) {
      $(".flavor-banner").addClass("active");
    }
  });
}

function EventSliderBox__init() {
  const swiper = new Swiper(".event-slide .swiper", {
    touchRatio: 0,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
}

Header__init();
BannerSliderBox__init();
ScrollBanner__init();
EventSliderBox__init();
FamailySite__init();