var scrollh = false;
var menuClik = false;
var media = false;
var media_menu_om_or_off = false;
var mediaCilk = false;
var menu_media = false;

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 100) {
        scrollh = true;
        document.getElementById("header-content").style = ("background-color: var(--color-body-color); box-shadow: -5px 1px 10px 1px rgba(0, 0, 0, 0.163);");
        document.getElementById("header-icon").style = ("color: var(--color-icon-color);");
        document.getElementById("text-1").style = ("color: rgba(255, 255, 255, 0);");
        document.getElementById("text-2").style = ("color: rgba(255, 255, 255, 0);");
        document.getElementById("button-a-1").style = ("color: rgba(255, 255, 255, 0); filter: opacity(0%);");
        document.getElementById("button-a-2").style = ("color: rgba(255, 255, 255, 0); filter: opacity(0%);");
        document.getElementById("text-decoration-fixed").style = ("color: rgba(255, 255, 255, 0);");
        document.getElementById("meun-desktop-a").style = ("color: var(--color-icon-color);");
        document.getElementById("icon").style = ("color: var(--color-icon-color);");
    } else {
        if (menuClik == false) {
        scrollh = false;
        document.getElementById("header-content").style = ("background-color:#ffffff00; box-shadow: none;" );
        document.getElementById("header-icon").style = ("color: white");
        document.getElementById("meun-desktop-a").style = ("color: white;");
        document.getElementById("icon").style = ("color: white");
    }
    document.getElementById("text-1").style = ("color: var(--color-text-color-3);");
    document.getElementById("text-2").style = ("color: var(--color-text-color-3);");
    document.getElementById("button-a-1").style = ("color: var(--color-text-color-3); filter: opacity(100%);");
    document.getElementById("button-a-2").style = ("color: var(--color-text-color-3); filter: opacity(100%);");

     }

    if (window.pageYOffset >= 1000) {
        document.getElementById("box-img-2").style = ("animation: translate 1s; transform: translate3d(0px, 0px, 0px);");
    }
});

function meun_media() {
    // media = true;
    if (menu_media == true) {
        document.getElementById("icon-menu-media").style = "animation: menu-ani-end 1s;";

        setTimeout (time_evend, 186); function time_evend() {

            document.getElementById("icon-menu-media").innerHTML = "menu";
           document.getElementById("main-media").style = ("display: block");
           document.getElementById("media-menu").style = ("display: none");
           document.getElementById("test-2").style = ("display: block");
           document.getElementById("footer").style = ("display: black");
           window.location.href = "";
            }

        menu_media = false;

    } else {

        menu_media = true;
        // scrollh = true;
           document.getElementById("main-media").style = ("display: none");
           document.getElementById("test-2").style = ("display: none");
           document.getElementById("footer").style = ("display: none");
           document.getElementById("media-menu").style = ("display: block");
           document.getElementById("icon-menu-media").innerHTML = "close";
           document.getElementById("icon-menu-media").style = "animation: menu-ani 1s;";
           meun_desktop_clik();
    }

    if(scrollh == false) {
       document.getElementById("header-content").style = ("background-color: var(--color-body-color); box-shadow: -5px 1px 10px 1px rgba(0, 0, 0, 0.163);");
       document.getElementById("header-icon").style = ("color: var(--color-icon-color);");
       document.getElementById("text-1").style = ("color: rgba(255, 255, 255, 0);");
       document.getElementById("text-2").style = ("color: rgba(255, 255, 255, 0);");
       document.getElementById("button-a-1").style = ("color: rgba(255, 255, 255, 0); filter: opacity(0%);");
       document.getElementById("button-a-2").style = ("color: rgba(255, 255, 255, 0); filter: opacity(0%);");
       document.getElementById("text-decoration-fixed").style = ("color: rgba(255, 255, 255, 0);");
       document.getElementById("meun-desktop-a").style = ("color: var(--color-icon-color);");
       document.getElementById("icon").style = ("color: var(--color-icon-color);");
    }
}

function meun_desktop_clik() {

    if (menuClik == true) {
        document.getElementById("meun-desktop-icon").innerHTML = "expand_more";
        document.getElementById("meun-desktop-header").style = ("display: none;");
        document.getElementById("header-content").style = ("background-color:#ffffff00; box-shadow: none;" );
        document.getElementById("meun-desktop-a").style = ("color: white;");
        document.getElementById("header-icon").style = ("color: white");
        document.getElementById("icon").style = ("color: white");
         
        if (scrollh == true) {
        document.getElementById("header-content").style = ("background-color: var(--color-body-color); box-shadow: -5px 1px 10px 1px rgba(0, 0, 0, 0.163);");
        document.getElementById("header-icon").style = ("color: black");
        document.getElementById("meun-desktop-a").style = ("color: var(--color-icon-color);");
        document.getElementById("icon").style = ("color: var(--color-icon-color);");
        }
        menuClik = false;
    } else {
        document.getElementById("meun-desktop-icon").innerHTML = "expand_less";
        document.getElementById("meun-desktop-header").style = ("display: flex; animation: menu-evemt 1s; height: 50px; background-color: var(--color-background-color-header-2); backdrop-filter: saturate(180%) blur(20px);");
        document.getElementById("header-content").style = ("background-color: var(--color-body-color); box-shadow: -5px 1px 10px 1px rgba(0, 0, 0, 0.163);");
        menuClik = true;

        if (scrollh == true) {}
        else {
            document.getElementById("header-content").style = ("background-color: var(--color-body-color); box-shadow: -5px 1px 10px 1px rgba(0, 0, 0, 0.163);");
            document.getElementById("header-icon").style = ("color: var(--color-icon-color);");
            document.getElementById("meun-desktop-a").style = ("color: var(--color-icon-color);");
            document.getElementById("icon").style = ("color: var(--color-icon-color);");

        }
    }
}

