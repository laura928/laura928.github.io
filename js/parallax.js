let parallax = document.querySelector('.Carga');

function scrollParallax(){
    let scrollTop =
    document.documentElement.scrollTop;
    parallax.style.transform = 'translateY(' + scrollTop * -0.3 + 'px)';
}
window.addEventListener('scroll', scrollParallax);


$('.parallax').mousemove(function(e) {

	var posX = e.pageX - this.offsetLeft;
	var posY = e.pageY - this.offsetTop;

	$('.parallax-item').each(function() {
		$(this).animate({
			top: posY * parseFloat($(this).attr('data-y'))
		}, {
			duration: 100,
			queue: false,
			easing: 'linear'
		});
		$(this).animate({
			left: posX * parseFloat($(this).attr('data-x'))
		}, {
			duration: 100,
			queue: false,
			easing: 'linear'
		});
		$(this).animate({
			opacity: '0.45'
		}, 1200)
	});
});