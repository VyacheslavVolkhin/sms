
$( document ).ready(function() {

  $(".menu-but").click(function() {
    $(".main-navigation").slideToggle();
  });


  if(window.matchMedia("(max-width: 767px)").matches){
    $(".has-subnav").click(function() {
      //$(".subnavigation").hide();
      $(this).find(".menu-item-emulator").closest('.has-subnav').find(".subnavigation").slideToggle();


    });
  }

});