$(function () {
    
    fixHeader();
    WebGuide();
    DesignModal();
    otherbtn();
    scrollbtn();
    skill();
    webhover();
    mainjs();
    main_para();
    design_work();
    Contact();
    
});

function WebGuide(){

    
}
function design_work(){
    var limits = 15.0;

    $(".event_work").mousemove(function (e) {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; //y position within the element.
    var offsetX = x / rect.width;
    var offsetY = y / rect.height;

    var rotateY = (offsetX) * (limits * 2) - limits;
    var rotateX = (offsetY) * (limits * 2) - limits;

    var shadowOffsetX = (offsetX) * 32 - 16;
    var shadowOffsetY = (offsetY) * 32 - 16;

    $(this).css({
        "box-shadow": (1 / 6) * -shadowOffsetX + "px " + (1 / 6) * -shadowOffsetY + "px 3px rgba(0, 0, 0, 0.051), " +
        (2 / 6) * -shadowOffsetX + "px " + (2 / 6) * -shadowOffsetY + "px 7.2px rgba(0, 0, 0, 0.073), " +
        (3 / 6) * -shadowOffsetX + "px " + (3 / 6) * -shadowOffsetY + "px 13.6px rgba(0, 0, 0, 0.09), " +
        (4 / 6) * -shadowOffsetX + "px " + (4 / 6) * -shadowOffsetY + "px 24.3px rgba(0, 0, 0, 0.107), " +
        (5 / 6) * -shadowOffsetX + "px " + (5 / 6) * -shadowOffsetY + "px 45.5px rgba(0, 0, 0, 0.129), " +
        -shadowOffsetX + "px " + -shadowOffsetY + "px 109px rgba(0, 0, 0, 0.18)",
        transform: "perspective(1000px) rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)"
    });

    var glarePos = rotateX + rotateY + 90;
    $(this)
        .children()
        .children()
        .css("left", glarePos + "%");
    });

    $(".event_work").mouseleave(function (e) {
    $(".event_work").css({"box-shadow": "0px 0px 3px rgba(0, 0, 0, 0.051), 0px 0px 7.2px rgba(0, 0, 0, 0.073), 0px 0px 13.6px rgba(0, 0, 0, 0.09), 0px 0px 24.3px rgba(0, 0, 0, 0.107), 0px 0px 45.5px rgba(0, 0, 0, 0.129), 0px 0px 109px rgba(0, 0, 0, 0.18)", "transform": "scale(1.0)"});
    $(".event_img").css("left", "100%");
    });
}
function main_para(){
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector(".flower");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        // console.log(x);
        let size=``
        elem.style.backgroundPosition = x;
    }
}
function mainjs(){
    $(".close_btn").on("click",function(){
        $(".screen_info").css({"display":"none"});
        $(this).css({"display":"none"});
    })
}

function webhover(){
    $(".web").hover(function(){
        $(this).find(".web_txt").toggleClass("on");
    })
    
}
    
function fixHeader() {
        $(window).scroll(function () {
            var window = $(this).scrollTop();
            if (window>=750) {
                $("#header").addClass("fixed", 1000);
                
            } else {
                $("#header").removeClass("fixed", 1000);
                
            }
        });
}


function scrollbtn() {
    const $topBtn = document.querySelector(".top");
    const $scrollDown = document.querySelector(".scroll-downs");
    // top버튼 클릭 시 맨 위로 이동
    window
        .addEventListener("scroll", function (e) {
            e.preventDefault();
            if ($(window).scrollTop() >= 750) {
                $topBtn.classList.add("on");
            } else {
                $topBtn.classList.remove("on");
            }

            
        })
        $topBtn
        .addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: "smooth"});
        })
        $scrollDown
        .addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({top: 750, behavior: "smooth"});
        })
}
/* 스크롤시 배경색 변경하기 */
// function scroll_bg(){
//     $(window).on("scroll touchmove",function(){
//         if($(document).scrollTop()>=$("#home").position().top){
//             $("body").css("background",$("#home").attr("data-bg"));
//         };
//         if($(document).scrollTop()>=$("#about").position().top){
//             $("body").css("background",$("#about").attr("data-bg"));
//         };
//         if($(document).scrollTop()>=$("#skill").position().top){
//             $("body").css("background",$("#skill").attr("data-bg"));
//         };
//         if($(document).scrollTop()>=$("#work").position().top){
//             $("body").css("background",$("#work").attr("data-bg"));
//         };
//         if($(document).scrollTop()>=$("#others").position().top){
//             $("body").css("background",$("#others").attr("data-bg"));
//         };
//         if($(document).scrollTop()>=$("#contact").position().top){
//             $("body").css("background",$("#contact").attr("data-bg"));
//         };
//     })
// }
/* other work section*/
function otherbtn() {
    const $titleli = $(".others_title_list");
    const $otherli = $(".other_list");
    $titleli.on("click", function (e) {
        e.preventDefault();
        var index = $(this).index();
        $titleli.removeClass("on");
        $titleli.eq(index).addClass("on");
        $otherli.removeClass("on");
        $otherli.eq(index).addClass("on");
    })
}
function skill() {
    $(".skill_list").on("click", function () {
        $(this)
            .find(".skill_list__desc")
            .stop()
            .slideToggle(300);
        $(this)
            .toggleClass("on")
            .siblings()
            .removeClass("on");
        $(this)
            .siblings()
            .find(".skill_list__desc")
            .slideUp(300);
    })
}
// popup창
function DesignModal() {
    var $img = $(".event_img>img");
    var $popup = $(".layer_bg .popup");
    var $close = $(".layer_bg .close");
    var $bg = $(".layer_bg");
    // 팝업창 닫기
    $bg.click(function (e) {
        e.preventDefault();
        $bg.css("display", "none");
        $popup.css("height", "0");
        $("body").css({"overflow-y": "auto"}); // prevent double scrollbar
        $(".top").css({"display": "block"});
    })
    $close.click(function (e) {
        e.preventDefault();
        $bg.css("display", "none");
        $popup.css("height", "0");
        $("body").css({"overflow-y": "auto"}); // prevent double scrollbar
        $(".top").css({"display": "block"});
    })
    $img.click(function (e) {
        e.preventDefault();
        $bg.css("display", "block");
        $popup.animate({
            height: 700
        }, 300);
        var src = $(this).attr("src");
        var alt = $(this).attr("alt");
        $(".layer_bg .popup>img").attr("src", src).attr("alt", alt);
        $("body").css({"overflow-y": "hidden"});
        $(".top").css({"display": "none"});
    })
    
}
function Contact(){
    $(".icons-content").hover(function(e){
        e.preventDefault();
        if($(this).index()==0){
            $(this).find("i").toggleClass("fa-solid fa-phone");
            $(this).find("i").toggleClass("fa-solid fa-phone-volume");
        }
        else if($(this).index()==1){
            $(this).find("i").toggleClass("fa-solid fa-envelope");
            $(this).find("i").toggleClass("fa-solid fa-envelope-open");
        }
        
    })
}