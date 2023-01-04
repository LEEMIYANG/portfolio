$(function () {
    fixHeader();
    popup();
    otherbtn();
    scrollbtn();
    skill();
    MainPage();
});

    
function fixHeader() {
        $(window).scroll(function () {
            var window = $(this).scrollTop();
            if (window) {
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
            if ($(window).scrollTop() >= 1000) {
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
            window.scrollTo({top: 1035, behavior: "smooth"});
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
function popup() {
    var $img = $(".event_img>img");
    var $popup = $(".layer_bg .popup");
    var $close = $(".layer_bg .close");
    var $bg = $(".layer_bg");
    // 팝업창 닫기
    $bg
        .click(function (e) {
            e.preventDefault();
            $bg.css("display", "none");
            $popup.css("height", "0");
            $("body").css({"overflow-y": "auto"}); // prevent double scrollbar
            $(".top").css({"display": "block"});
        })
        $close
        .click(function (e) {
            e.preventDefault();
            $bg.css("display", "none");
            $popup.css("height", "0");
            $("body").css({"overflow-y": "auto"}); // prevent double scrollbar
            $(".top").css({"display": "block"});
        })
        //
        $img
        .click(function (e) {
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