$(document).ready(function () {

// menu open
$(".toggleNav").click(function () {
$("#subnav").toggleClass("active");
$(".toggleNavButton").toggleClass("active");
});



// Search box Expanding
var submitIcon = $('.searchbox-icon');
var inputBox = $('.searchbox-input');
var searchBox = $('.searchbox');
var isOpen = false;
submitIcon.click(function () {
if (isOpen == false) {
searchBox.addClass('searchbox-open');
inputBox.focus();
isOpen = true;
} else {
searchBox.removeClass('searchbox-open');
inputBox.focusout();
isOpen = false;
}
});
submitIcon.mouseup(function () {
return false;
});
searchBox.mouseup(function () {
return false;
});
$(document).mouseup(function () {
if (isOpen == true) {
$('.searchbox-icon').css('display', 'block');
submitIcon.click();
}
});

function buttonUp() {
var inputVal = $('.searchbox-input').val();
inputVal = $.trim(inputVal).length;
if (inputVal !== 0) {
$('.searchbox-icon').css('display', 'none');
} else {
$('.searchbox-input').val('');
$('.searchbox-icon').css('display', 'block');
}
}


// menu click go to related section




$('ul.nav li a').click(function (e) {

var targetHref = $(this).attr('href');

$('html, body').animate({
scrollTop: $(targetHref).offset().top
}, 1000);

e.preventDefault();
});


// box slider
$('.bxslider').bxSlider({
mode: 'horizontal',
moveSlides: 1,
controls: false,
slideMargin: 40,
infiniteLoop: true,
// slideWidth: 660,
minSlides: 1,
maxSlides: 1,
speed: 800,
});


//Blog Slider
var rev = $('.rev_slider');
rev.on('init', function (event, slick, currentSlide) {
var
cur = $(slick.$slides[slick.currentSlide]),
next = cur.next(),
prev = cur.prev();
prev.addClass('slick-sprev');
next.addClass('slick-snext');
cur.removeClass('slick-snext').removeClass('slick-sprev');
slick.$prev = prev;
slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
console.log('beforeChange');
var
cur = $(slick.$slides[nextSlide]);
console.log(slick.$prev, slick.$next);
slick.$prev.removeClass('slick-sprev');
slick.$next.removeClass('slick-snext');
next = cur.next(),
prev = cur.prev();
prev.prev();
prev.next();
prev.addClass('slick-sprev');
next.addClass('slick-snext');
slick.$prev = prev;
slick.$next = next;
cur.removeClass('slick-next').removeClass('slick-sprev');
});

rev.slick({
speed: 1000,
arrows: true,
dots: false,
focusOnSelect: true,
prevArrow: '<button class="Prev"><img src="images/prev.png"/></button>',
nextArrow: '<button class="Next"><img src="images/next.png"/></button>',
infinite: true,
centerMode: true,
slidesPerRow: 1,
slidesToShow: 1,
slidesToScroll: 1,
centerPadding: '0',
swipe: true,
customPaging: function (slider, i) {
return '';
},
/*infinite: false,*/
});





});