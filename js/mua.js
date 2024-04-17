let area_division = document.getElementById("area_division");
let swiper_area_division =
  area_division.getElementsByClassName("swiper_area")[0];
let swiper_area_wraper =
  area_division.getElementsByClassName("swiper-wrapper")[0];
let swiper_slides = area_division.getElementsByClassName("swiper-slide");
for (let swiper_slide of swiper_slides) {
  swiper_slide.addEventListener("mouseover", function () {
    let swiper_slide_description = swiper_slide.getElementsByClassName(
      "swiper-slide-description"
    )[0];
    swiper_slide_description.style.transition = "all 1s";
    swiper_slide_description.style.height = "54%";
  });
  swiper_slide.addEventListener("mouseout", function () {
    let swiper_slide_description = swiper_slide.getElementsByClassName(
      "swiper-slide-description"
    )[0];
    swiper_slide_description.style.height = "10%";
    swiper_slide_description.style.transition = "all 1s";
  });
}
