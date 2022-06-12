var menuClik = false;
var media_clik_menu = false;

window.onload = function screen_test() {
    if (window.matchMedia("(min-height: 1170px)").matches) {
        document.getElementById("content").style = ("margin-top: 1310px;");
    }
}

function meun_media_clik() {
    if (media_clik_menu == true) {

        document.getElementById("icon-menu-media").style = "animation: menu-ani-end 1s;";

        setTimeout (time_evend, 186); function time_evend() {

            document.getElementById("icon-menu-media").innerHTML = "menu";
            document.getElementById("media-menu").style = ("display: none");
           document.getElementById("main-media").style = ("display: block");
           document.getElementById("footer").style = ("display: black");
           window.location.href = "";
            }

            media_clik_menu = false;
    
    } else {
        media_clik_menu = true;
        document.getElementById("icon-menu-media").innerHTML = "close";
        document.getElementById("icon-menu-media").style = "animation: menu-ani 1s;";
        document.getElementById("media-menu").style = ("display: block");
        document.getElementById("main-media").style = ("display: none");
        document.getElementById("footer").style = ("display: none");
    }
}

function meun_desktop_clik() {

    if (menuClik == true) {
        document.getElementById("meun-desktop-icon").innerHTML = "expand_more";
        document.getElementById("meun-desktop-header").style = ("display: none;");
         
        menuClik = false;
    } else {
        document.getElementById("meun-desktop-icon").innerHTML = "expand_less";
        document.getElementById("meun-desktop-header").style = ("display: flex; animation: menu-evemt 1s; height: 50px; background-color: var(--color-background-color-header-2); backdrop-filter: saturate(180%) blur(20px);");
        document.getElementById("header-content").style = ("background-color: var(--color-body-color); box-shadow: -5px 1px 10px 1px rgba(0, 0, 0, 0.163);");
        menuClik = true;
        }
    }
    window.addEventListener('scroll', () => {
       if (window.pageYOffset >= 10) {document.getElementById("cover-logo-img").style = ("width: 900px;");} 
       if (window.pageYOffset >= 20) {document.getElementById("cover-logo-img").style = ("width: 800px;");}
       if (window.pageYOffset >= 40) {document.getElementById("cover-logo-img").style = ("width: 700px;");}
       if (window.pageYOffset >= 50) {document.getElementById("cover-logo-img").style = ("width: 600px;");}
       if (window.pageYOffset >= 60) {document.getElementById("cover-logo-img").style = ("width: 500px;");}
       if (window.pageYOffset >= 70) {document.getElementById("cover-logo-img").style = ("width: 400px;");}
       if (window.pageYOffset >= 80) {document.getElementById("cover-logo-img").style = ("width: 300px;");}
       if (window.pageYOffset >= 90) {document.getElementById("cover-logo-img").style = ("width: 200px;");}
       if (window.pageYOffset >= 100) {document.getElementById("cover-logo-img").style = ("width: 100px;");}
       if (window.pageYOffset >= 110) {document.getElementById("cover-logo-img").style = ("width: 0px;");}

       // box 4 font event
       if (window.pageYOffset >= 1900) {document.getElementById("box-4-span-1").style = ("margin-left: 700px; -webkit-transition: 0.5s; transition: 0.5s;");}
       if (window.pageYOffset >= 1899) {document.getElementById("box-4-span-1").style = ("margin-left: 0px; -webkit-transition: 0.5s; transition: 0.5s;" );}else {document.getElementById("box-4-span-1").style = ("margin-left: 700px; -webkit-transition: 0.5s; transition: 0.5s;");}

       // I see it event

       // op area
       if (window.pageYOffset >= 2500) {document.getElementById("logo-op").style = ("filter: opacity(100%);");}else{document.getElementById("logo-op").style = ("filter: opacity(0%);");}
       if (window.pageYOffset >= 2700) {document.getElementById("logo-op-p").style = ("transform: translate3d(0px, 0px, 0px)");}else{document.getElementById("logo-op-p").style = ("transform: translate3d(0px, 153px, 0px)");}

       // background cover-img clear
      if (window.pageYOffset >= 2000) {document.getElementById("cover-img-img").style = ("display: none;");}else{document.getElementById("cover-img-img").style = ("display: block;");}

      // scroll down 
      if (window.pageYOffset >= 110) {document.getElementById("scroll-event").style = ("display: none");}else{document.getElementById("scroll-event").style = ("display: block");}

    });