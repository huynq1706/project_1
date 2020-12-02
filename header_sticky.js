window.onscroll = function() {myFunction()};

  var header = document.querySelector(".header__grp-box");
  var main = document.querySelector("main");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
      
  }
}

// sử lý chuyển danh mục và thông tin
var btnCate = document.querySelector('.header__control-info-cate');
var btnSetting = document.querySelector('#box-user');

var listCate = document.querySelector('.header__control-list');
var listSetting = document.querySelector('.header__control-list-setting');
var flag = true;

    btnSetting.onclick = function() {
      listCate.classList.add('setting-box');
      listSetting.classList.remove('setting-box');
    }

  btnCate.onclick = function() {
    listCate.classList.remove('setting-box');
    listSetting.classList.add('setting-box');
  }
  

   

