
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 100);
})

window.addEventListener("resize", function(){
    var nav = document.querySelector("nav");
    var width = $(window).width();
    nav.classList.toggle("sticky", width <= 1027);
})

$(document).ready(function(){
    var nav = document.querySelector("nav");
    var width = $(window).width();
    nav.classList.toggle("sticky", width <= 1027);
})

window.addEventListener("resize", function(){
    var nav = document.querySelector("nav");
    var offsetHeight = window.pageYOffset;
    var width = $(window).width();
    if (offsetHeight > 100) {
    nav.classList.add("sticky", width <= 1027);
    }
})

window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    var width = $(window).width();
    if (width <= 1027) {
    nav.classList.add("sticky", window.scrollY < 100);
    }
})

window.addEventListener("click", function(){
    var width = $(window).width();
    if (width <= 1027) {
    $("a").on('click', function(event) {
        document.getElementById("navCheckbox").checked = false;
    });
    }   
});

// Obtained from https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2
$(document).ready(function(){
// Add smooth scrolling to all links
$("a").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") {
// Prevent default anchor click behavior
event.preventDefault();

// Store hash
var hash = this.hash;

// Using jQuery's animate() method to add smooth page scroll
// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
$('html, body').animate({
scrollTop: $(hash).offset().top
}, 800, function(){
});
} // End if
});
});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".logo").on('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    });
    });

