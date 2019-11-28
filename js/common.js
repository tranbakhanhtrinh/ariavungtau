$(document).ready(function(){
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 80
        }, 600);
        event.preventDefault();
    });
    if($(window).width() < 768){
        $(".navbar-light .nav-link").on('click', function(){
            $(".navbar-toggler").click();
        })
    }
    $(".btn_dkbaogia_header").on('click',function(){
        $('html, body').stop().animate({
            scrollTop: $('#header').offset().top - 80
        }, 600);
    })
    $(".btn_dkbaogia_ft").on('click',function(){
        $('html, body').stop().animate({
            scrollTop: $('#footer').offset().top - 80
        }, 600);
    })
})

function isValidEmail(emailText) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailText);
};

function checkPhoneNumber() {
    var flag = false;
    var phone = $('#phone').val().trim(); // ID của trường Số điện thoại
    phone = phone.replace('(+84)', '0');
    phone = phone.replace('+84', '0');
    phone = phone.replace('0084', '0');
    phone = phone.replace(/ /g, '');
    if (phone != '') {
        var firstNumber = phone.substring(0, 2);
        if ((firstNumber == '09' || firstNumber == '08' || firstNumber == '03' || firstNumber == '05' || firstNumber == '07') && phone.length == 10) {
            if (phone.match(/^\d{10}/)) {
                flag = true;
            }
        }
    }
    return flag;
}


function checkPhoneNumber_ft() {
    var flag = false;
    var phone = $('#phone_ft').val().trim(); // ID của trường Số điện thoại
    phone = phone.replace('(+84)', '0');
    phone = phone.replace('+84', '0');
    phone = phone.replace('0084', '0');
    phone = phone.replace(/ /g, '');
    if (phone != '') {
        var firstNumber = phone.substring(0, 2);
        if ((firstNumber == '09' || firstNumber == '08' || firstNumber == '03' || firstNumber == '05' || firstNumber == '07') && phone.length == 10) {
            if (phone.match(/^\d{10}/)) {
                flag = true;
            }
        }
    }
    return flag;
}

function kiemtra()
{
  if($('#fullname').val() == "")
  {
    alert("Vui lòng nhập Họ tên!");
    $('#fullname').focus();
  }       
  else if(!checkPhoneNumber()){
    alert("Số điện thoại bạn điền không hợp lệ !");
    $('#phone').focus(); 
    return false;
  }
  else if($('#email').val()=="" || !isValidEmail($('#email').val())){   
    alert("Email phải hợp lệ !");
    $('#email').focus();
    return false;
  } 
  else
  {   
    var phone =  $('#phone').val();    
    var fullname =  $('#fullname').val();      
    var email = $('#email').val();
    $.ajax({
      type: "POST",
      url: "api/register.php",      
      data: {fullname:fullname,email:email,phone:phone},
      success: function(data){  
        data = JSON.parse(data);
        if(data.result === "0")
        {
            alert("Bạn đã đăng ký rồi");
        }
        else
        {
            window.location.href = "thanks.html";
        } 
      }
    }); 
  } 
  
}


function kiemtra_ft()
{
  if($('#fullname_ft').val() == "")
  {
    alert("Vui lòng nhập Họ tên!");
    $('#fullname_ft').focus();
  }       
  else if(!checkPhoneNumber_ft()){
    alert("Số điện thoại bạn điền không hợp lệ !");
    $('#phone_ft').focus(); 
    return false;
  }
  else if($('#email_ft').val()=="" || !isValidEmail($('#email_ft').val())){   
    alert("Email phải hợp lệ !");
    $('#email_ft').focus();
    return false;
  } 
  else
  {   
    var phone =  $('#phone_ft').val();    
    var fullname =  $('#fullname_ft').val();      
    var email = $('#email_ft').val();
    $.ajax({
      type: "POST",
      url: "api/register.php",      
      data: {fullname:fullname,email:email,phone:phone},
      success: function(data){  
            data = JSON.parse(data);
            if(data.result === "0")
            {
                alert("Bạn đã đăng ký rồi");
            }
            else
            {
                window.location.href = "thanks.html";
            } 
        
      }
    }); 
  } 
  
}

