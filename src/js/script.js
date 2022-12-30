$(".header__burger").on("click", function () {
  $(".header__burger").toggleClass("active");
  $(".header__burger_menu").toggleClass("active");
  gsap.fromTo(
    ".header__burger_menu",
    {
      scale: 1.2,
    },
    {
      duration: 1,
      scale: 1,
    }
  );
  gsap.from(".header__burger_menu li", {
    duration: 1,
    x: -1000,
  });
});
$(".header__burger_menu a").on("click", function () {
  $(".header__burger_menu").removeClass("active");
  $(".header__burger").removeClass("active");
});