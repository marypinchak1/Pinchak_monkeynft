$(".header__burger").on("click", function () {
  $(".header__burger").toggleClass("active");
  $(".header__burger_menu").toggleClass("active");
  gsap.fromTo(
    ".header__burger_menu",
    {
      scale: 0.1,
    },
    {
      scale: 1,
    }
  );
});
$(".header__burger_menu a").on("click", function () {
  $(".header__burger_menu").removeClass("active");
  $(".header__burger").removeClass("active");
});

// Set the date we're counting down to
var countDownDate = new Date("Jan 25, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  document.getElementById("timer2").innerHTML =
    days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s";
  document.getElementById("timer3").innerHTML =
    days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s";
  document.getElementById("timer4").innerHTML =
    days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s";
  document.getElementById("timer5").innerHTML =
    days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "0h 0m 0s";
    document.getElementById("timer2").innerHTML = "0h:0m:0s";
    document.getElementById("timer3").innerHTML = "0h:0m:0s";
    document.getElementById("timer4").innerHTML = "0h:0m:0s";
    document.getElementById("timer5").innerHTML = "0h:0m:0s";
  }
}, 1000);

const swiper = new Swiper(".companies__slider", {
  slidesPerView: 2,
  spaceBetween: 18,
  grabCursor: true,
  loop: true,
  speed: 6000,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  // Responsive breakpoints
  breakpoints: {
    600: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});
new Swiper(".companies__slider-reversed", {
  slidesPerView: 2,
  spaceBetween: 18,
  grabCursor: true,
  loop: true,
  loopedSlides: 6,
  speed: 6000,

  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  // Responsive breakpoints
  breakpoints: {
    600: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});
