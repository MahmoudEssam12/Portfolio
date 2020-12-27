$(document).ready(function () {
	setTimeout(function () {
		$(".loader").delay(500).fadeOut("slow");
		$("#overlayer").delay(500).fadeOut("slow");
	}, 500);
});
var nav = new Vue({
	el: '.main-nav',
	data: {
		navList: ['home', 'about', 'skills', 'education', 'experince', 'work', 'contact me'],
		navListId: [1, 2, 3, 4, 5, 6, 7]
	},
	methods: {
		activeClass: function (event) { }
	},
});
var acc = new Vue({
	el: '.accordion-wrap',
	data: {
		name: ''
	},
	methods: {
		toggle: function (event) {
			event.target.classList.toggle('color-opened');
		}
	}
}); $('#mainSlider').owlCarousel({
	loop: true,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	items: 1,
	margin: 10,
	padding: 30,
	autoplay: true,
	stagePadding: 10,
	smartSpeed: 450,
	dots: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1
		}
	}
}); $('#wrapper').height($(window).height());
$(window).resize(function () {
	$('#wrapper').height($(window).height());
	$('#sidebar-wrapper').height($(window).height());
}); var owlHeight = $('.page-content').height(),
	wrapperFlexH = $('.wrapper-flexy').height();
$('.wrapper-flexy').height(owlHeight);


var tabs = new Vue({
	el: '.works-tabs-wrapper',
	data: {
		activeTab: '1'
	}
}); new WOW().init();

// gsap animation
const toggleButton = document.querySelector('.third-button');
const tl = gsap.timeline({
	defaults: { ease: "none", duration: 0.1 },
	onReverseComplete: () => {
		TweenLite.set('.hamburger, .overlay-opac, #sidebar-wrapper, .f, .s, .t',
			{ clearProps: 'all' }
		)
	}
});
var windowWidth = window.matchMedia("(max-width: 768px)");
var windowMobWidth = window.matchMedia("(max-width: 415px)");

if (windowWidth.matches) {

	var toggleMe = false;

	tl.to('.hamburger', {
		'left': '80%',
		duration: .1
	}, '-=.2')
	tl.to('.overlay-opac', {
		opacity: 1,
		'backgroundColor': "rgba(0, 0, 0, 0.3)",
		'zIndex': "2"
	})

	tl.to('#sidebar-wrapper', {
		'transform': 'translateX(100%)',
		duration: .1,
		ease: "power1.out"
	}, '-=.2')
	tl.to('.f', {
		"transformOrigin": "0px 0px 0px",
		"transform": "translate(-1px, 16.971px) rotate(-45deg)",
		duration: .1
	})
	tl.to('.s', {
		'transform': 'translateX(10px)',
		opacity: 0,
		ease: 'expo.out',
		duration: .1
	})
	tl.to('.t', {
		"transformOrigin": "0 0px 0",
		"transform": "translate(1.293px, -23.506px) rotate(45deg)",
		duration: .1
	})
	tl.pause();

	toggleButton.addEventListener('click', () => {
		toggleMe = !toggleMe;
		if (toggleMe) {
			tl.play()
		} else {
			tl.reverse()
		};
	})
}

