let footer_right_form = document.getElementById("footer_right_form");
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("LVDjy-_AdCjJtPP3e");
})();
footer_right_form.addEventListener("submit", function (e) {
  let loading_spinner = document.getElementsByClassName("loadingContainer1")[0];

  e.preventDefault();
  const data = new FormData(footer_right_form);
  let error = ValidateForm(data);
  if (error != "") {
    alert(error);
    return;
  } else {
    loading_spinner.style.display = "flex";
    emailjs.sendForm("service_xqor18n", "template_z8dxix4", this).then(
      function () {
        loading_spinner.style.display = "none";
        alert(
          "Cảm ơn bạn đã liên hệ. Chúng tôi sẽ trả lời trong thời gian sớm nhất"
        );
      },
      function (error) {
        loading_spinner.style.display = "none";
        alert("FAILED...", error);
      }
    );
  }
});

function ValidateForm(data) {
  let error = "";
  let newLine = "\r\n";
  let fullname = data.get("fullname");
  let phone = data.get("phone");
  let email = data.get("email");
  let content = data.get("content");
  const phoneFormat = new RegExp("(84|0[3|5|7|8|9])+([0-9]{8})");

  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
  if (fullname.length <= 0) {
    error += "Vui lòng nhập tên của bạn" + newLine;
  }
  if (!phone.match(phoneFormat)) {
    error += "Vui lòng nhập đúng format số điện thoại." + newLine;
  }
  console.log(email);
  if (!email.match(emailFormat)) {
    error += "Vui lòng nhập đúng format email" + newLine;
  }
  if (content.length <= 0) {
    error += "Vui lòng nhập nội dung cần tư vấn" + newLine;
  }
  return error;
}
let search_icon = document.getElementById("search_icon");
let search_input = document.getElementsByClassName("search_input")[0];
let input = search_input.getElementsByTagName("input")[0];

search_input.style.display = "none";

search_icon.addEventListener("click", function () {
  console.log(search_input.style.display);
  if (search_input.style.display == "none") {
    search_input.style.display = "flex";
  } else {
    if (input.value != "") {
      window.location.replace(
        `http://127.0.0.1:5502/pages/news/tin-tuc.html?title=${input.value}`
      );
    } else {
      alert("Vui lòng nhập từ khóa tìm kiếm.");
    }
  }
});
