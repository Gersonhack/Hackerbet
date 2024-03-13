/*!
=========================================================
* grmatrix Landing page
=========================================================

* Copyright: 2024 GR DevCRUD (https://devcru.com)
* Licensed(licenses)
* 

=========================================================

* dev matrix 
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});
function apk(){
  window.open("https://www.mediafire.com/file/l1zaf0ullgau8k1/PREMIUM_AVI_A-P-P_1.0-1.apk/file")
}

function zap(){
  window.open("https://contate.me/predict");
}
function sapp(){
  window.open("https://contate.me/predict");
}
