$(function () {
    
    main_para();
    mainjs();
    webhover();
    fixHeader();
    DesignModal();
    otherbtn();
    scrollbtn();
    skill();
    design_work();
    Contact();
    
});

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
    var $img = $(".design_img>img");
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
        console.log($(this).parent().parent().parent().index())
        $bg.css("display", "block");
        
        if($(this).parent().parent().parent().index()==2){
            $popup.animate({
                height: 700
            }, 300).css("opacity",1);
        }
        if($(this).parent().parent().parent().index()==3){
            $popup.animate({
                height: 100
            }, 300).css("opacity",1);
        }
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