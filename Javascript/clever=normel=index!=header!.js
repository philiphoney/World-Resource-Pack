var menuClik = false;
var media_clik_menu = false;
var more_buttom_ = false;

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
        setTimeout (time_evend, 1700); function time_evend() {}
        document.getElementById("meun-desktop-header").style = ("display: flex; animation: menu-evemt 1s; height: 50px; background-color: var(--color-background-color-header-2); backdrop-filter: saturate(180%) blur(20px);");
        document.getElementById("header-content").style = ("background-color: var(--color-body-color); box-shadow: -5px 1px 10px 1px rgba(0, 0, 0, 0.163);");
        menuClik = true;
        }
}

window.onload = function lead_img() {
    document.getElementById("box-index-1").style = ("background-image: url('../../image/clever-gallery/555933-93c25aa8-ad21-49c7-b04e-e401709265e2.webp');");
    document.getElementById("box-index-1").style = ("background-image: url('../../image/clever-gallery/555933-93c25aa8-ad21-49c7-b04e-e401709265e2.webp');");
    document.getElementById("box-index-1").style = ("background-image: url('../../image/clever-gallery/555933-93c25acb-6c6a-4010-bb0d-0d1b2aa2a105.webp');");
    document.getElementById("box-index-1").style = ("background-image: url('../../image/clever-gallery/555933-93c25ad8-5925-4bf0-87a9-1766e3716a7d.webp');");
    document.getElementById("box-index-1").style = ("background-image: url('../../image/clever-gallery/555933-93c25ae4-9456-4913-a78b-55096c094ad1.webp');");
}

window.onload = function clever_gallery() {
    setTimeout (time_evend, 0); function time_evend() {
        document.getElementById("box-index-1").style = ("background-image: url('../../image/clever-gallery/555933-93c25aa8-ad21-49c7-b04e-e401709265e2.webp');");
        setTimeout (time_evend, 4700); function time_evend() {
            document.getElementById("box-index-1").style = ("background-image: url('../../image/clever-gallery/555933-93c25aa8-ad21-49c7-b04e-e401709265e2.webp');");
            setTimeout (time_evend, 4700); function time_evend() {
                document.getElementById("box-index-1").style = ("background-image: url('../../image/clever-gallery/555933-93c25acb-6c6a-4010-bb0d-0d1b2aa2a105.webp');");
                setTimeout (time_evend, 4700); function time_evend() {
                    document.getElementById("box-index-1").style = ("background-image: url('../../image/clever-gallery/555933-93c25ad8-5925-4bf0-87a9-1766e3716a7d.webp');");
                    setTimeout (time_evend, 4700); function time_evend() {
                        document.getElementById("box-index-1").style = ("background-image: url('../../image/clever-gallery/555933-93c25ae4-9456-4913-a78b-55096c094ad1.webp');");
                        setTimeout (time_evend, 4700); function time_evend() {
                            clever_gallery()
                        }
                    }
                }
            }
        }
    }
}

function more_buttom() {
    if (more_buttom_ == true) {
        document.getElementById("icon-buttom-more").innerHTML = "add";
        document.getElementById("box-index-2").style = ("display: none;");
        document.getElementById("box-index-2-media").style = ("display: none;");
        more_buttom_ = false;

    } else {
        document.getElementById("icon-buttom-more").innerHTML = "remove";
        document.getElementById("box-index-2").style = ("display: block;");
        document.getElementById("box-index-2-media").style = ("display: block;");
        more_buttom_ = true;
    }
}