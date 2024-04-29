
// При старте ссайта с разширением меньше 768 слайдер активен
//if (window.innerWidth <= 768) {

function slider_3() {
	$(".slider-3").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	})
}


slider_3();

//}
//динамическое вкл\выкл слайдера


