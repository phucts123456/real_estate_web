let footer_right_form = document.getElementById("footer_right_form");
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("LVDjy-_AdCjJtPP3e");
})();
if (footer_right_form != null) {
  footer_right_form.addEventListener("submit", function (e) {
    let loading_spinner =
      document.getElementsByClassName("loadingContainer1")[0];

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
}

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
if (search_icon != null) {
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
}

const default_user = {
  username: "admin@gmail.com",
  password: "admin",
  fullname: "admin",
};

let login_form = document.getElementById("login_form");

if (login_form != null) {
  let loggedInUser = localStorage.getItem("loginUser");
  if (loggedInUser != null) {
    window.location.replace("http://127.0.0.1:5502/pages/index.html");
  }
  login_form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(login_form);
    let username = data.get("username");
    let password = data.get("password");
    let userList = localStorage.getItem("userlist");
    if (userList != null) {
      let userListJson = JSON.parse(userList);
      for (let user of userListJson) {
        if (username == user.email && password == user.password) {
          localStorage.setItem("loginUser", user.email);
          if (
            document.referrer.includes(
              "http://127.0.0.1:5502/pages/user/register.html"
            )
          )
            history.back();
          else
            window.location.replace("http://127.0.0.1:5502/pages/index.html");
        } else {
          alert("Sai tài khoản hoặc mật khẩu");
        }
      }
    }
  });
}
const newLine = "\r\n";
function validateRegister(firstname, lastname, email, password, rePassword) {
  let error = "";
  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
  if (firstname.length <= 0) {
    error += "Vui lòng nhập first name" + newLine;
  }
  if (lastname.length <= 0) {
    error += "Vui lòng nhập last name" + newLine;
  }
  if (!email.match(emailFormat)) {
    error += "Vui lòng nhập đúng format email" + newLine;
  }
  if (password.length <= 8 || password.length > 16) {
    error += "Vui lòng nhập password 8-16 kí tự" + newLine;
  }
  if (password != rePassword) {
    error += "Vui lòng nhập confirm password trùng với password " + newLine;
  }
  return error;
}

let loginInfor = localStorage.getItem("loginUser");
let user_login = document.getElementById("block-welcomeusernameloginlogout");
if (user_login != null && loginInfor != null) {
  let display_user = user_login.getElementsByClassName("user_infor_item")[0];
  let logout_btn = user_login.getElementsByClassName("user_infor_item")[1];
  logout_btn.addEventListener("click", function () {
    alert("Đăng xuất thành công");
    localStorage.removeItem("loginUser");
    user_login.removeEventListener("mouseover", function () {}, true);
    window.location.replace(window.location);
  });
  display_user.innerText = `Xin Chào, ${loginInfor}`;
  user_login.addEventListener("mouseover", function () {
    let user_infor = document.getElementById("user_infor");
    user_infor.style.display = "block";
  });

  user_login.addEventListener("mouseout", function () {
    let user_infor = document.getElementById("user_infor");
    user_infor.style.display = "none";
  });
}

let register_form = document.getElementById("register_form");
if (register_form != null) {
  register_form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(register_form);
    let password = data.get("password");
    let rePass = data.get("rePassword");
    let lastname = data.get("lastname");
    let firstname = data.get("firstname");
    let email = data.get("email");
    let error = validateRegister(firstname, lastname, email, password, rePass);
    if (error != "") {
      alert(error);
      return;
    }
    let userList = localStorage.getItem("userlist");
    let newUser = {
      password: password,
      lastname: lastname,
      firstname: firstname,
      email: email,
    };
    if (userList != null) {
      let userListJson = JSON.parse(userList);
      for (let user of userListJson) {
        if (user.email == email) {
          alert("email đã tồn tại. Vui lòng nhập email khác.");
          return;
        }
      }
      userListJson.push(newUser);
      let userListJsonString = JSON.stringify(userListJson);
      localStorage.setItem("userlist", userListJsonString);
      alert("Tạo tài khoản thành công");
      window.location.replace(`http://127.0.0.1:5502/pages/user/login.html`);
    } else {
      let userList = [];
      userList.push(newUser);
      let userListJsonString = JSON.stringify(userList);
      localStorage.setItem("userlist", userListJsonString);
      alert("Tạo tài khoản thành công");
      window.location.replace(`http://127.0.0.1:5502/pages/user/login.html`);
    }
  });
}
