$(function(){
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 730){ //1000px
            $(".header_cont").removeClass("deactive");
            $(".header_cont").addClass("active");
        }else{
            $(".header_cont").removeClass("active");
            $(".header_cont").addClass("deactive");
        }
    })
  });