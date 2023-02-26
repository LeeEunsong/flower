$(document).ready(function() {
    $('#gnb>li').hover(function() {
        $('.submenu', this).stop().slideDown();
    }, function() {
        $('.submenu', this).stop().slideUp();
    });
    
    var idx = 0;
    setInterval(function() {
        $('#slide>a').eq(idx).animate({top: '-100%'}, 400).animate({top: '100%'}, 0);
        idx==2?idx=0:idx++;
        $('#slide>a').eq(idx).animate({top: 0}, 400);
    }, 3000);
    
    $('#back').click(function(){
        $('#back').fadeOut();
    });
});