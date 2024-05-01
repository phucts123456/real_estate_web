let history_datas = {
  data: [
    {
      year: "2002",
      history:
        "Thành lập công ty Cổ phần Vincom, tiền thân là Tập đoàn Vingroup- Công ty CP, công ty mẹ của Vinhomes",
      achivement: `abc`,
      image: "../resources/img/vinhomes_logo.jpg",
    },
    {
      year: "2014",
      history: `Đưa vào vận hành dự án khu đô thị cao cấp Vinhomes Riverside, Hà Nội, rộng 183,5 ha`,
      achivement: `Giải kép Tốt nhất Việt Nam tại Giải thưởng bất động sản Châu Á - Thái Bình Dương (Asia Pacific Property Awards), thuộc hệ thống giải thưởng bất động sản hàng đầu thế giới - International Property Awards ở 2 hạng mục: - “Trung tâm thương mại tốt nhất Việt Nam” cho Vincom Mega Mall Royal City - “Dự án phức hợp được đánh giá cao” cho khu đô thị Royal City`,
      image: "../resources/img/vinhomes_logo.jpg",
    },
  ],
};

let urban_history = {
  data: [
    {
      name: "Vinhomes Grand Park",
      location_id: "59",
      location: "Ho Chi Minh",
      detail: `Với quy hoạch của TP. Thủ Đức - Vùng kinh tế sáng tạo,
                          công nghệ cao mới của TP. HCM cũng như cả nước,
                          Vinhomes Grand Park nắm chắc vị trí Trung tâm phát
                          triển kinh tế, thương mại giải trí sầm uất bậc
                          nhất Sài thành nhờ nền tảng giao thông đồng bộ, thuận
                          lợi và được nâng cấp mạnh mẽ từng ngày.`,
      img: "https://res.cloudinary.com/phuchq/image/upload/c_crop,w_279,h_132/v1712856347/vinhomes-grand-park_hkagzu.jpg",
      vid: "https://res.cloudinary.com/phuchq/video/upload/v1712853014/Vinhomes_Grand_Park_kq9784.mp4",
    },
    {
      name: "Vinhomes Smart City",
      location_id: "29",
      location: "Ha Noi",
      detail: `THÀNH PHỐ QUỐC TẾ CỦA NHỮNG CÔNG DÂN TOÀN CẦU Tại
                          Vinhomes Smart City, chúng tôi mong muốn mang đến cho
                          bạn một nơi tận hưởng cuộc sống sang trọng, đẳng cấp,
                          một đại đô thị thông minh đầu tiên tại Việt Nam.`,
      img: "https://storage.googleapis.com/vinhomes-data-02/styles/images_279_x_132/public/2021_02/200708_VH_Smart City_EXT_9 cams_cam 2_FINAL.jpg?itok=Jr8H0jfs",
      vid: "https://res.cloudinary.com/phuchq/video/upload/v1712853039/Vinhomes_Smart_City_nbxhr3.mp4",
    },
    {
      name: "Vinhomes Ocean Park",
      location_id: "29",
      location: "Ha Noi",
      detail: `Không chỉ là một Đại đô thị đẳng cấp quốc tế, Vinhomes
                          Ocean Park kiến tạo nên một Thành phố mới với Thiên
                          nhiên – Cuộc sống và Con người với một diện mạo mới mẻ
                          và tinh thần hứng khởi, sẵn sàng cho những trải nghiệm
                          tưởng không thể mà lại là có thể. Nơi liền kề phố
                          phường sôi động là xanh ngát đại dương Nơi giữa nội đô
                          là cận biển kề hồ, là góc bể chân mây Nơi chỉ một bước
                          là thư thái vùi chân dưới làn cát mịn và cũng chỉ một
                          bước là thỏa sức reo vui với nhịp sống năng động từng
                          ngày.`,
      img: "https://storage.googleapis.com/vinhomes-data-02/styles/images_279_x_132/public/2021_02/IMGL3349_1.jpg?itok=RH4N0J6N",
      vid: "https://res.cloudinary.com/phuchq/video/upload/v1712852856/VINHOMES_OCEAN_PARK_tosvly.mp4",
    },
    {
      name: "Vinhomes West Point",
      location_id: "29",
      location: "Ho Chi Minh",
      detail: `VỊ TRÍ VÀNG - TRUNG TÂM PHÍA TÂY Vinhomes West Point
                          tọa lạc ngay điểm giao giữa hai tuyến đường huyết mạch
                          Phạm Hùng &amp; Đỗ Đức Dục. Đây được coi là vị trí
                          vàng hưởng trọn sinh khí thịnh vượng từ dòng chảy tài
                          lộc của khu vực, khi mà cận kề đều là các công trình
                          biểu tượng của thành phố như Bảo tàng Hà Nội, khách
                          sạn 5 sao JW Marriot, Trung tâm hội nghị quốc gia,
                          Landmark 72…`,
      img: "https://storage.googleapis.com/vinhomes-data-02/styles/images_279_x_132/public/2021_02/VHWP_PCTI_View_5.jpg?itok=FEb6mKoZ",
      vid: "https://res.cloudinary.com/phuchq/video/upload/v1712852809/Vinhomes_West_Point_qresj9.mp4",
    },
  ],
};

let default_video =
  "https://res.cloudinary.com/phuchq/video/upload/v1712894638/Vinhomes_TV_-_G%E1%BA%A0T_BAY_N%E1%BB%96I_LO_L%C3%83I_SU%E1%BA%A4T_T%E1%BB%B0_TIN_S%E1%BB%9E_H%E1%BB%AEU_NH%C3%80_HI%E1%BB%86U_VINHOMES_vkgeeo.mp4";
let year_slider = document.getElementById("year-slider");
let swiper_slides = year_slider.getElementsByClassName("swiper-slide");

let history_achivement_wrapper = document.getElementById(
  "history_achivement_wrapper"
);

let body_wrapper_type =
  history_achivement_wrapper.getElementsByClassName("type");

let body_wrapper_type_spans =
  body_wrapper_type[0].getElementsByClassName("ht_pointer");

for (let body_wrapper_type_span of body_wrapper_type_spans) {
  body_wrapper_type_span.addEventListener("click", function (e) {
    for (let body_wrapper_type_span of body_wrapper_type_spans) {
      body_wrapper_type_span.classList.remove("active");
    }
    this.classList.add("active");

    let mainBody =
      body_wrapper_type_span.parentElement.parentElement.getElementsByClassName(
        "main_body"
      )[0];
    let history_data = searchHistory(
      mainBody.getElementsByTagName("h4")[0].innerText
    );
    if (this.tabIndex === 1) {
      mainBody.getElementsByTagName("p")[0].innerText = history_data.history;
    }
    if (this.tabIndex === 2) {
      mainBody.getElementsByTagName("p")[0].innerText = history_data.achivement;
    }
  });
}

function remove_animate_class(index, length) {
  if (index > 0 || index < swiper_slides.length - 1) {
    for (let i = index; i < length; i++) {
      swiper_slides[i].classList.remove("animate");
    }
  }
}

function add_animate_class_to_previous(index, length) {
  if (index >= 0) {
    for (let i = index; i >= 0; i--) {
      swiper_slides[i].classList.add("animate");
    }
  }
}
function create_element(tag_name, attributes) {
  let element = document.createElement(tag_name);

  if (attributes) {
    for (let key in attributes) {
      element[key] = attributes[key];
    }
  }

  return element;
}
document.addEventListener("DOMContentLoaded", function (event) {
  let year_swiper_slide = document.getElementById(
    "swiper-wrapper-10c77ebe2954c9c7d"
  );
  for (let history_data of history_datas.data) {
    year_swiper_slide.appendChild(createYearSlider(history_data.year));
  }
  setHistoryDetail(
    history_datas.data[0].image,
    history_datas.data[0].year,
    history_datas.data[0].history
  );
  let current_pick = 0;
  if (swiper_slides.length > 0) {
    for (let i = 0; i < swiper_slides.length; i++) {
      load_year_slider(swiper_slides[i], i);
      swiper_slides[i].addEventListener("click", function (e) {
        swiper_slides[i].classList.add("animate");
        var historyData = searchHistory(swiper_slides[i].tabIndex);
        setHistoryDetail(
          historyData.image,
          historyData.year,
          historyData.history
        );
        add_animate_class_to_previous(i - 1, swiper_slides.length);
        remove_animate_class(i + 1, swiper_slides.length);
      });
    }
  }
  for (let data of urban_history.data) {
    let location = CreateUrbanList(data.name, data.detail, data.img);
    $("#city_list").after(location);
  }

  let side_bar_urban = document.getElementsByClassName("slide_filter_btn")[0];
  let side_bar_icon = side_bar_urban.getElementsByTagName("img")[0];

  side_bar_urban.addEventListener("click", function (e) {
    let urban_map_filter = document.getElementById("urban_map_filter_side_bar");
    if (urban_map_filter.offsetWidth < 395) {
      urban_map_filter.style.width = "395px";
      side_bar_icon.src = "/resources/img/angle_left_icon.png";
    } else {
      urban_map_filter.style.width = 0;
      side_bar_icon.src = "/resources/img/angle_right_icon.png";
    }
  });
  let location_select = document.getElementById("location_select");
  // when client clicked on select element
  location_select.addEventListener("change", (e) => {
    $("#urban_list").find(".urban").remove();
    let vid = document.getElementById("location_vid_show");
    vid.src = default_video;
    vid.load();
    for (let data of urban_history.data) {
      if (location_select.value == "default") {
        let location = CreateUrbanList(data.name, data.detail, data.img);
        $("#city_list").after(location);
      } else if (data.location_id == location_select.value) {
        let location = CreateUrbanList(data.name, data.detail, data.img);
        $("#city_list").after(location);
      }
    }
    let ht_pointer_khu_do_thi = document.getElementById("urban_list");

    let urban_list = ht_pointer_khu_do_thi.getElementsByClassName("urban");
    for (let urban of urban_list) {
      urban.addEventListener("click", (e) => {
        let detail_body = urban.getElementsByClassName("detail_body");
        if (detail_body.length > 0) {
          if (detail_body[0].style.display == "block") {
            detail_body[0].style.display = "none";
          } else {
            detail_body[0].style.display = "block";
            let location_name =
              detail_body[0].parentElement.getElementsByClassName(
                "detail_header"
              )[0].innerText;
            let video_link = "";
            for (let urban_data of urban_history.data) {
              if (urban_data.name == location_name) {
                video_link = urban_data.vid;
              }
            }
            if (video_link != "") {
              let vid = document.getElementById("location_vid_show");
              if (vid.src != video_link) {
                vid.src = video_link;
                vid.load();
                vid.play();
                // let side_bar = document.getElementById(
                //   "urban_map_filter_side_bar"
                // );
                // side_bar.style.width = 0;
              }
            }
          }
        }
        let detail_footer = urban.getElementsByClassName("detail_footer");
        if (detail_footer[0].style.display == "block") {
          detail_footer[0].style.display = "none";
        } else {
          detail_footer[0].style.display = "block";
        }
      });
    }
  });
  let ht_pointer_khu_do_thi = document.getElementById("urban_list");

  let urban_list = ht_pointer_khu_do_thi.getElementsByClassName("urban");
  for (let urban of urban_list) {
    urban.addEventListener("click", (e) => {
      let detail_body = urban.getElementsByClassName("detail_body");
      if (detail_body.length > 0) {
        if (detail_body[0].style.display == "block") {
          detail_body[0].style.display = "none";
        } else {
          let location_name =
            detail_body[0].parentElement.getElementsByClassName(
              "detail_header"
            )[0].innerText;
          let video_link = "";
          for (let urban_data of urban_history.data) {
            if (urban_data.name == location_name) {
              video_link = urban_data.vid;
            }
          }
          if (video_link != "") {
            let vid = document.getElementById("location_vid_show");
            if (vid.src != video_link) {
              vid.src = video_link;
              vid.load();
              vid.play();
              let side_bar = document.getElementById(
                "urban_map_filter_side_bar"
              );
              // side_bar.style.width = 0;
              let side_bar_icon = side_bar
                .getElementsByClassName("slide_filter_btn")[0]
                .getElementsByTagName("img")[0];
              side_bar_icon.src = "/resources/img/angle_right_icon.png";
            }
          }
          detail_body[0].style.display = "block";
        }
      }
      let detail_footer = urban.getElementsByClassName("detail_footer");
      if (detail_footer[0].style.display == "block") {
        detail_footer[0].style.display = "none";
      } else {
        detail_footer[0].style.display = "block";
      }
    });
  }
  let element = document.getElementById("location_vid_show");

  element.addEventListener("scroll", (event) => {
    console.log("abc");
  });
});

function setHistoryDetail(img, year, content) {
  let history_detail_year = document.getElementById("history_detail_year");
  let history_detail_desciption = document.getElementById(
    "history_detail_disciption"
  );
  $("#history_detail_img").attr("src", img);
  history_detail_year.innerText = year;
  history_detail_desciption.innerText = content;
}
function searchHistory(year) {
  for (let history_data of history_datas.data) {
    if (history_data.year == year) {
      return history_data;
    }
  }
}

function createYearSlider(year) {
  let div_swiper_slide = create_element("div", {
    className: `swiper-slide _${year} picked swiper-slide-active`,
    style: "width: 43.3846px; margin-right: 48px;",
    role: "group",
    tabIndex: year,
    ariaLabel: "1 / 15",
  });
  let div_square = create_element("div", {
    className: "square",
  });
  let div_nested_square = create_element("div", {
    className: "nested_square",
  });
  let div_year = create_element("div", {
    className: "year aos-init",
    dataAosDelay: "0",
    innerText: year,
  });
  div_square.appendChild(div_nested_square);
  div_swiper_slide.appendChild(div_square);
  div_swiper_slide.appendChild(div_year);
  return div_swiper_slide;
}

createYearSlider();

function load_year_slider(swiper_slide, index) {
  let data = history_datas;
  swiper_slide.classList.add(`_${data.data[index].year}`);
  let yearTextContainer = swiper_slide.getElementsByClassName("year");
  yearTextContainer[0].innerText = data.data[index].year;
}
function CreateUrbanList(name, des, img) {
  let div_urban_container = create_element("div", {
    className: "urban ht_pointer",
  });
  console.log(div_urban_container);
  let h3_urban_name = create_element("h3", {
    className: "text_3",
    innerText: name,
  });
  let detail_info_urban = create_element("div", {
    className: "detail_info_urban ht_transition",
  });
  let detail_header_text_2 = create_element("div", {
    className: "detail_header text_2",
    innerText: name,
  });
  let detail_body = create_element("div", {
    className: "detail_body",
  });
  let ht_reset_margin_text_3 = create_element("p", {
    className: "ht_reset_margin text_3",
    innerText: des,
  });
  let detail_footer = create_element("p", {
    className: "detail_footer",
  });
  let swiper_container = create_element("div", {
    className: "swiper-container",
  });
  let swiper_wrapper = create_element("div", {
    className: "swiper-wrapper",
  });
  let swiper_slide = create_element("div", {
    className: "swiper-slide",
  });
  let detail_footer_img = create_element("img", {
    src: img,
  });
  detail_footer.appendChild(swiper_container);
  swiper_container.appendChild(swiper_wrapper);
  swiper_wrapper.appendChild(swiper_slide);
  swiper_slide.appendChild(detail_footer_img);
  detail_body.appendChild(ht_reset_margin_text_3);
  detail_info_urban.appendChild(detail_header_text_2);
  detail_info_urban.appendChild(detail_body);
  div_urban_container.appendChild(h3_urban_name);
  div_urban_container.appendChild(detail_info_urban);
  div_urban_container.appendChild(detail_footer);
  return div_urban_container;
}
