$(this).ready(function () {
  $('.dropdown-submenu a.dropdown-item').on("click", function (e) {
    $(this).next('div').toggle();
    e.stopPropagation();
    e.preventDefault();
  }
  );
});
//==== fix responsive====
$(document).ready(function () {
  var header_innerWidth = $(this).innerWidth();
  if (header_innerWidth >= 992) {
    $('.dropdown-item').hover(
      function () {
        $(this).css('background-color','#adb5bd');
      },function () {
        $(this).css('background-color','#fff');
      });

    $(this).ready(function () {
      $('.nav-item,.dropdown-submenu').hover(
      function () {
        $(this).children('.dropdown-menu').fadeIn('fast');
       
      },
      function () {
        $(this).children('.dropdown-menu').fadeOut('fast');
      });
    });
   
  }
  
  // console.log(header_innerWidth);
});
//-------
