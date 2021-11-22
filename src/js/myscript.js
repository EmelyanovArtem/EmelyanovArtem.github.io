

$(document).ready(function(){

    "use strict"

let finishCash = 0;
let finishDate = 0;


let calculate={
    
    cash:[
        [0, 1000, 2500, 6000],
        [0, 1500, 1200, 2500],
        [0, 1000, 2500, 1500],
    ],
    date: [
        [0, 2, 4, 7],
        [0, 4, 3, 5],
        [0, 2, 4, 3],  
    ]
    
};
/*-------------------------------------------------*/
$('#type_c, #style_c, #adaptability_c, #cash_c').bind('input', calculater);
function calculater(){
    let type =0;
    type =parseInt($("#type_c").val());
    let style =0 ;
    style =parseInt($("#style_c").val());
    let adaptivity =0 ;
    adaptivity =parseInt($("#adaptability_c").val());

    let type_date = parseInt($("#type_c option:selected").attr('data'));
    let style_date = parseInt($("#style_c option:selected").attr('data'));
    let adaptivity_date = parseInt($("#adaptability_c option:selected").attr('data'));

    finishCash = type + adaptivity + style; 
    finishDate = type_date + style_date + adaptivity_date;

    $("#date_c").val(finishDate);
    $("#cash_c").val(finishCash);
    console.log(type_date);
    console.log($("#type_c").attr('data'));
};

//Анимация увиличения чисел
const time = 1000;
const step = 1;


    function outNum(num, elem, pref) {
        let e = document.querySelector(elem);
        let n = 0;
        let t = Math.round(time / (num / step));
        let interval = setInterval(() => {
          n = n + step;
          if (n == num) {
            clearInterval(interval);
          }
          e.innerHTML = n + pref;
        }, t);
      }




// функция возвращает cookie с именем name, если есть, если нет, то undefined    
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
var alertwin = getCookie("alertwin");
if (alertwin != "no") { 
    $(document).mouseleave(function(e){
        if (e.clientY < 10) {
            $(".exitblock").fadeIn("fast");    
            $('#about, #skills, #case, #main, #calculator, #statistics, #reviews, #contact, #map, #footer, #header').css({ opacity: 0.2 });
            // записываем cookie на 1 день, с которой мы не показываем окно
            var date = new Date;
            date.setDate(date.getDate() + 1);    
            document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();       
        }    
    });
    $(document).click(function(e) {
        if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .mess").length)) {
            $(".exitblock").remove();
            $('#about, #skills, #case, #main, #calculator, #statistics, #reviews, #contact, #map, #footer, #header').css({ opacity: 1 });
        }
    });  
}


    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
    
        $('.section').each((i, el) => {
            if($(el).offset().top - $('.menu').outerHeight(true) <= scrollDistance){
                $('.menu li').each((i, el) => {
                    if ($(el).hasClass('active')){
                        $(el).removeClass('active');
                    }
                });
                $('.menu a:eq('+ i +')').find('li').addClass('active');
            }
        });
    });

    
//------------------------------------------------------------------------------------Срабатывание анимации, когда элемент виден

let anim_stop_bool = true;

function anim_stop(){
    anim_stop_bool = false
}

function scroll_animate(){
    $(window).scroll(() => {
        let box_information = $('#statistics').offset().top - $('.case').outerHeight(true);
        let box_information2 = $('#statistics').offset().top + $('.case').outerHeight(true);
        let scrollDistance = $(window).scrollTop();
        let a = 0;

            if(scrollDistance >= 4000 && anim_stop_bool == true) {   
                outNum(120, '.clients_c', "");
                outNum(5, '.hourse_c', "K");
                outNum(340, '.projects_c', "");
                outNum(23, '.rewerd_c', "");     
                anim_stop()
                
            };  
        console.log($('#statistics').offset().top - $('.case').outerHeight(true) + '  ' + scrollDistance + '  ' + $('#statistics').offset().top + $('.case').outerHeight(true));
    });    
};
scroll_animate()
});


