$(document).ready(function () {
  $('.slider-img').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
  });
});

$('.products-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.testimonial-slider').slick({
  dots: true,
  infinite: true,
  speed: 200,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});