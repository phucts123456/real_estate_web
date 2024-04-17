let metaSettings = {
  common_css: `<link rel="stylesheet" href="../css/common.css">`,
  bootstrap: `<link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
        crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>`,
  font: `<link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">`,
  aos: `\n<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
   \n <script>
    AOS.init();
  </script>`,
  jquery: `\n <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>`,
  smtp: `\n <script src="https://smtpjs.com/v3/smtp.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>`,
};

function LoadDefault() {
  // Remove the script from head first
  let elmt = document.getElementById("defaultSettingScript");
  if (typeof elmt != "undefined" && elmt != null) {
    elmt.parentNode.removeChild(elmt);
  }
  // insert meta tags and other tags to head section
  document.head.innerHTML += `${metaSettings.common_css} \n ${metaSettings.bootstrap} \n ${metaSettings.font} \n ${metaSettings.aos} \n ${metaSettings.jquery}`;
}

LoadDefault();
