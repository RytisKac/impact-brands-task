var burgerMenu = document.getElementById('burger-button');
var overlay = document.getElementById('burger-menu');
burgerMenu.addEventListener('click', function () {
	this.classList.toggle('close');
	overlay.classList.toggle('overlay');
});

document.addEventListener('DOMContentLoaded', function () {
	new Splide('#blend-slider', {
		type: 'loop',
		classes: {
			arrows: 'splide__arrows your-class-arrows',
			arrow: 'splide__arrow your-class-arrow',
			prev: 'splide__arrow--prev your-class-prev',
			next: 'splide__arrow--next your-class-next',
		},
	}).mount();
});

const accordions = document.querySelectorAll('.accordion');

const openAccordion = (accordion) => {
	const content = accordion.querySelector('.accordion__content');
	accordion.classList.add('accordion__active');
	content.style.maxHeight = content.scrollHeight + 'px';
};

const closeAccordion = (accordion) => {
	const content = accordion.querySelector('.accordion__content');
	accordion.classList.remove('accordion__active');
	content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
	const intro = accordion.querySelector('.accordion__title');
	const content = accordion.querySelector('.accordion__content');

	intro.onclick = () => {
		if (content.style.maxHeight) {
			closeAccordion(accordion);
		} else {
			accordions.forEach((accordion) => closeAccordion(accordion));
			openAccordion(accordion);
		}
	};
});
