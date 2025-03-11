import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

import axios from 'axios';

document.addEventListener('DOMContentLoaded', function () {
	const acc = new Accordion('.about-accordion-container', {
		firstOpen: true,
		duration: 500,
		showMultiple: false,
		collapse: true,
	});
	acc.open(0);

	const swiper = new Swiper('.swiper', {
		modules: [Navigation, Keyboard],
		loop: true,
		slidesPerView: 2,
		grabCursor: true,
		simulateTouch: true,
		touchRatio: 1,
		navigation: {
			nextEl: '.swiper-button-next',
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},

		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1440: {
				slidesPerView: 6,
			},
		},
	});
});
