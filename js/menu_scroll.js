$(function(){
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 1000){
            $(".header_cont").removeClass("deactive");
            $(".header_cont").addClass("active");
        }else{
            $(".header_cont").removeClass("active");
            $(".header_cont").addClass("deactive");
        }
    })
  });