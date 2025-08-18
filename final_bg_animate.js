function movebg(){
    var x = 0;
    setInterval(function(){
        x-=1;
        $('body').css('background-position', '0 ' + x + 'px');
    }, 60);
}
movebg();