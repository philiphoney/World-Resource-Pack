var menuClik = false;
var media_clik_menu = false;

function meun_media_clik() {
    if (media_clik_menu == true) {

        document.getElementById("icon-menu-media").style = "animation: menu-ani-end 1s;";

        setTimeout (time_evend, 186); function time_evend() {

            document.getElementById("icon-menu-media").innerHTML = "menu";
            document.getElementById("body").style = ("background-image: url('https://i.ibb.co/sHPQtKR/raidenpack-b.jpg');");
            document.getElementById("media-menu").style = ("display: none");
           document.getElementById("main-media").style = ("display: block");
           document.getElementById("footer").style = ("display: black");
           window.location.href = "";
            }

            media_clik_menu = false;
    
    } else {
        media_clik_menu = true;
        document.getElementById("icon-menu-media").innerHTML = "close";
        document.getElementById("body").style = ("background-image: var(--color-body-color);");
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
        setTimeout (time_evend, 1700); function time_evend() {}
        document.getElementById("meun-desktop-header").style = ("display: flex; animation: menu-evemt 1s; height: 50px; background-color: var(--color-background-color-header-2); backdrop-filter: saturate(180%) blur(20px);");
        document.getElementById("header-content").style = ("background-color: var(--color-body-color); box-shadow: -5px 1px 10px 1px rgba(0, 0, 0, 0.163);");
        menuClik = true;
        }
}