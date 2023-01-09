$(function(){
    let current=0;
    $('.proj .work li').on('mouseover',function(){
        current=$(this).index();
        $('.proj .preview li').eq(current).css({'visibility':'visible'}).fadeIn(500);
    })
    $('.proj .work li').on('mouseleave',function(){
        $('.proj .preview li').css({'visibility':'hidden'}).fadeOut(500);
    })
})