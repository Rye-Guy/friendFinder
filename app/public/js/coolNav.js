$(document).ready(function(){

    var didScroll;
    var lastScroll = 0;
    var d = 5; 
    var navbarHeight = $("header").outerHeight();
    
    //a function that lets the browser know when the user has scrolled that then triggers the setInterval. 
    $(window).scroll(function(event){
        didScroll = true; 
    });
    
    //check every 1/4 sec to see if the didScroll var state has changed. 
    setInterval(function(){
        if(didScroll){
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    
    function hasScrolled(){
        //number represents the current value of the scroll position / starts at 0
        var st = $(this).scrollTop();
        console.log(st);
        //Makes sure the scroll is more than d
    
        if(Math.abs(lastScroll - st) <= d)
            return;
    
        //what happens after you scroll past the navbar and were adding classes to control the bar. This is needed so we dont see empty space behind the navbar
        if(st > lastScroll && st > navbarHeight){
            //Scroll Down
            $("header").removeClass('nav-down').addClass('nav-up');
        }else{
            //Scroll Up
            if(st + $(window).height() < $(document).height()){
            $("header").removeClass('nav-up').addClass('nav-down');
            }
        }
        //value is set to current scroll position on the page. 
        lastScroll = st;
    }

});