var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

window.onscroll = function() {scrollFunction()};

//1
// jak refresha robić
// jak juz się otworzy i wtedy zmiejszymy okienko to i tak działa scrypt na dole
//2
// zobacz np. uruchom na więcej niż 1200 px i zmniejsz do mniej niż 1000px


var pageWidth = $(window).width();
// console.log(pageWidth)

function scrollFunction() {

    if(pageWidth > 1200){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.height = "45px";
            document.getElementById("logo").style.display = "none";
            // nie działa
            document.querySelector("nav ul").style.height = "45px";

            var liElems = document.querySelectorAll("ul li");
            var index = 0, length = liElems.length;
            for ( ; index < length; index++) {
                liElems[index].style.height = "45px";
            }

            var aElems = document.querySelectorAll("ul li a");
            var index = 0, length = aElems.length;
            for ( ; index < length; index++) {
                aElems[index].style.padding = "9px 17px";
            }
            
            
        } else {
            document.getElementById("navbar").style.height = "65px";
            document.getElementById("logo").style.display = "block";
            document.querySelector("nav ul").style.height = "65px";

            var liElems = document.querySelectorAll("ul li");
            var index = 0, length = liElems.length;
            for ( ; index < length; index++) {
                liElems[index].style.height = "65px";
            }

            var aElems = document.querySelectorAll("ul li a");
            var index = 0, length = aElems.length;
            for ( ; index < length; index++) {
                aElems[index].style.padding = "19px 17px";
            }
        }
    }
}
