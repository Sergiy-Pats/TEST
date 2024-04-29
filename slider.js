
// При старте ссайта с разширением меньше 768 слайдер активен
//if (window.innerWidth <= 768) {

$(document).ready(function slider_3() {
	console.log("slider");
	$(".slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true
	})
});



//slider_3();

//}
//динамическое вкл\выкл слайдера


