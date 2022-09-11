var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

window.onscroll = function() {scrollFunction()};


var pageWidth = $(window).width();
// console.log(pageWidth)

function scrollFunction() {

    if(pageWidth > 1200){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

            var aElems = document.querySelectorAll("ul li a");
            var index = 0, length = aElems.length;
            for ( ; index < length; index++) {
                aElems[index].style.padding = "9px 17px";
                aElems[index].style.fontSize = "14px";
            }

        } else {
            var aElems = document.querySelectorAll("ul li a");
            var index = 0, length = aElems.length;
            for ( ; index < length; index++) {
                aElems[index].style.padding = "19px 23px";
                aElems[index].style.fontSize = "16px";
            }
        }
    }

    if(pageWidth > 1000 && pageWidth < 1200 ){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

            var aElems = document.querySelectorAll("ul li a");
            var index = 0, length = aElems.length;
            for ( ; index < length; index++) {
                aElems[index].style.padding = "9px 17px";
                aElems[index].style.fontSize = "14px";
            }

        } else {
            var aElems = document.querySelectorAll("ul li a");
            var index = 0, length = aElems.length;
            for ( ; index < length; index++) {
                aElems[index].style.padding = "15px 17px";
                aElems[index].style.fontSize = "16px";
            }
        }
    }

    if(pageWidth > 810 && pageWidth < 1000){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

            var aElems = document.querySelectorAll("ul li a");
            var index = 0, length = aElems.length;
            for ( ; index < length; index++) {
                aElems[index].style.padding = "12px 10px";
                aElems[index].style.fontSize = "12px";
            }

        } else {
            var aElems = document.querySelectorAll("ul li a");
            var index = 0, length = aElems.length;
            for ( ; index < length; index++) {
                aElems[index].style.padding = "15px 10px";
                aElems[index].style.fontSize = "14px";
            }
        }
    }
    

}
