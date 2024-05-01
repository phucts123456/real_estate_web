let footer_right_form = document.getElementById("footer_right_form");
console.log(footer_right_form);
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("LVDjy-_AdCjJtPP3e");
})();
footer_right_form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(footer_right_form);
  emailjs.sendForm("service_xqor18n", "template_z8dxix4", this).then(
    function () {
      alert(
        "Cảm ơn bạn đã liên hệ. Chúng tôi sẽ trả lời trong thời gian sớm nhất"
      );
    },
    function (error) {
      alert("FAILED...", error);
    }
  );
});

let search_icon = document.getElementById("search_icon");
let search_input = document.getElementsByClassName("search_input")[0];
let input = search_input.getElementsByTagName("input")[0];

search_input.style.display = "none";

search_icon.addEventListener("click", function () {
  console.log(search_input.style.display);
  if (search_input.style.display == "none") {
    search_input.style.display = "flex";
    console.log("object");
  } else {
    if (input.value != "") {
      window.location.replace(
        `http://127.0.0.1:5502/pages/news/tin-tuc.html?title=${input.value}`
      );
    }
  }
});
