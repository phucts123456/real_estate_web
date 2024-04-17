let footer_right_form = document.getElementById("footer_right_form");
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
