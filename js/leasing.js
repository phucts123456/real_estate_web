var position = $(window).scrollTop();

$(window).scroll(function (e) {
  let overview = document.getElementById("container_video_background");
  let leasing_detail_header = document.getElementById("leasing_detail_header");
  var scroll = $(window).scrollTop();
  if (scroll > position) {
    // down
    console.log("down");
    if (
      window.scrollY > leasing_detail_header.offsetHeight &&
      window.scrollY < overview.offsetHeight
    ) {
      let overview = document.getElementById("overview");
      window.scrollTo({
        top: overview.offsetTop - leasing_detail_header.offsetHeight,
        left: 0,
        behavior: "smooth",
      });
      leasing_detail_header.classList.add("scroll-menu");
      let box_logo_homepage =
        document.getElementsByClassName("box-logo-homepage");
      box_logo_homepage[0].classList.add("active");
    }
  } else {
    if (window.scrollY < overview.offsetHeight) {
      let leasing_detail_header = document.getElementById(
        "leasing_detail_header"
      );
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      leasing_detail_header.classList.remove("scroll-menu");
      let box_logo_homepage =
        document.getElementsByClassName("box-logo-homepage");
      box_logo_homepage[0].classList.remove("active");
    }
  }
});
// $("#container")
//   .find("div.video_background")
//   .bind("mousewheel", function (event) {
//     console.log(event.originalEvent.wheelDelta);
//     if (event.originalEvent.wheelDelta >= 0) {
//       console.log("Scroll up");
//     } else {
//       console.log("Scroll down");
//       window.addEventListener("wheel", function (e) {}, {
//         passive: false,
//       });
//       let overview = document.getElementById("overview");
//       window.scrollTo({
//         top: overview.offsetTop - leasing_detail_header.offsetHeight,
//         left: 0,
//         behavior: "smooth",
//       });
//       leasing_detail_header.classList.add("scroll-menu");
//       let box_logo_homepage =
//         document.getElementsByClassName("box-logo-homepage");
//       box_logo_homepage[0].classList.add("active");
//     }
//   });

// $("#overview").bind("mousewheel", function (event) {
//   if (event.originalEvent.wheelDelta >= 0) {
//     var scrollTop = $(window).scrollTop();
//     var topDistance = $(this).offset().top;
//     if (scrollTop - topDistance <= "37.95") {
//       let leasing_detail_header = document.getElementById(
//         "leasing_detail_header"
//       );
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       });
//       leasing_detail_header.classList.remove("scroll-menu");
//       let box_logo_homepage =
//         document.getElementsByClassName("box-logo-homepage");
//       box_logo_homepage[0].classList.remove("active");
//     }
//   }
// });
