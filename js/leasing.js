var position = $(window).scrollTop();
var lastScrollTop = 0;
let video_background = document.getElementById("container_video_background");
let leasing_detail_header = document.getElementById("leasing_detail_header");
let overview = document.getElementById("overview");
let isScrollingDown = false;
let isScrollingUp = false;
$(window).scroll(function (e) {
  st = $(this).scrollTop();
  if (st > lastScrollTop) {
    console.log(overview.offsetTop - leasing_detail_header.offsetHeight);
    console.log(Math.round(window.scrollY));
    if (
      Math.round(window.scrollY) + 100 > leasing_detail_header.offsetHeight &&
      Math.round(window.scrollY) + 100 < video_background.offsetHeight
    ) {
      if (!isScrollingDown) {
        window.scrollTo({
          top: overview.offsetTop - leasing_detail_header.offsetHeight,
          left: 0,
          behavior: "smooth",
        });
        isScrollingDown = true;
      }
      leasing_detail_header.classList.add("scroll-menu");
      let box_logo_homepage =
        document.getElementsByClassName("box-logo-homepage");
      box_logo_homepage[0].classList.add("active");
    } else if (Math.round(window.scrollY) > video_background.offsetHeight) {
      leasing_detail_header.classList.add("scroll-menu");
      let box_logo_homepage =
        document.getElementsByClassName("box-logo-homepage");
      box_logo_homepage[0].classList.add("active");
    }
    if (
      overview.offsetTop - leasing_detail_header.offsetHeight ==
      Math.round(window.scrollY)
    ) {
      isScrollingDown = false;
    }
    // console.log(overview.offsetTop - leasing_detail_header.offsetHeight);
    // console.log(Math.round(window.scrollY));
  } else if (st < lastScrollTop) {
    console.log("up");
    if (Math.round(window.scrollY) + 100 < video_background.offsetHeight) {
      if (!isScrollingUp) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        isScrollingUp = true;
      }
      leasing_detail_header.classList.remove("scroll-menu");
      let box_logo_homepage =
        document.getElementsByClassName("box-logo-homepage");
      box_logo_homepage[0].classList.remove("active");
    }
    if (Math.round(window.scrollY) == 0) {
      isScrollingUp = false;
    }
  } else {
    console.log("sdfasdf");
  }
  lastScrollTop = st;
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
var scrollEvents = (function (document, $) {
  var d = {
    scrolling: false,
    scrollDirection: "none",
    scrollTop: 0,
    eventRegister: {
      scroll: [],
      scrollToTop: [],
      scrollToBottom: [],
      scrollStarted: [],
      scrollStopped: [],
      scrollToTopStarted: [],
      scrollToBottomStarted: [],
    },
    getScrollTop: function () {
      return d.scrollTop;
    },
    setScrollTop: function (y) {
      d.scrollTop = y;
    },
    isScrolling: function () {
      return d.scrolling;
    },
    setScrolling: function (bool) {
      var oldVal = d.isScrolling();
      d.scrolling = bool;
      if (bool) {
        d.executeCallbacks("scroll");
        if (oldVal !== bool) {
          d.executeCallbacks("scrollStarted");
        }
      } else {
        d.executeCallbacks("scrollStopped");
      }
    },
    getScrollDirection: function () {
      return d.scrollDirection;
    },
    setScrollDirection: function (direction) {
      var oldDirection = d.getScrollDirection();
      d.scrollDirection = direction;
      if (direction === "UP") {
        d.executeCallbacks("scrollToTop");
        if (direction !== oldDirection) {
          d.executeCallbacks("scrollToTopStarted");
        }
      } else if (direction === "DOWN") {
        d.executeCallbacks("scrollToBottom");
        if (direction !== oldDirection) {
          d.executeCallbacks("scrollToBottomStarted");
        }
      }
    },
    init: function () {
      d.setScrollTop($(document).scrollTop());
      var timer = null;
      $(window).scroll(function () {
        d.setScrolling(true);
        var x = d.getScrollTop();
        setTimeout(function () {
          var y = $(document).scrollTop();
          d.setScrollTop(y);
          if (x > y) {
            d.setScrollDirection("UP");
          } else {
            d.setScrollDirection("DOWN");
          }
        }, 100);
        if (timer !== "undefined" && timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          d.setScrolling(false);
          d.setScrollDirection("NONE");
        }, 200);
      });
    },
    registerEvents: function (eventName, callback) {
      if (
        typeof eventName !== "undefined" &&
        typeof callback === "function" &&
        typeof d.eventRegister[eventName] !== "undefined"
      ) {
        d.eventRegister[eventName].push(callback);
      }
    },
    executeCallbacks: function (eventName) {
      var callabacks = d.eventRegister[eventName];
      for (var k in callabacks) {
        if (callabacks.hasOwnProperty(k)) {
          callabacks[k](d.getScrollTop());
        }
      }
    },
  };
  return d;
})(document, $);
