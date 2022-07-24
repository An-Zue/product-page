let lastScrollTop = 0;
let currentScrollTop;
let header = document.querySelector('header');
let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.menu');

window.addEventListener('load', () => {
	document.body.classList.add('fade-in');
	setTimeout(() => {
		document.querySelector('.product-container img').classList.remove('blur');
	}, 1500);
});

window.addEventListener('scroll', () => {
	if (window.matchMedia("(min-width: 600px)").matches) {
		currentScrollTop = window.pageYOffset;
		if (lastScrollTop < currentScrollTop && currentScrollTop > 0) {
			header.classList.add('hidden');
			header.classList.remove('visible');
		} else {
			header.classList.add('visible');
			header.classList.remove('hidden');
		}
		lastScrollTop = currentScrollTop;
	}
});

menuButton.addEventListener('click', () => {
	if (menuButton.classList.contains('close')) {
		menuButton.classList.remove('close');
		menuButton.classList.add('open');
		menu.classList.remove('hidden');
		menu.classList.add('visible');
		header.classList.remove('visible');
		document.documentElement.style.overflow = 'hidden';
	}
	else if (menuButton.classList.contains('open')) {
		menuButton.classList.remove('open');
		menuButton.classList.add('close');
		menu.classList.remove('visible');
		menu.classList.add('hidden');
		document.documentElement.style.overflow = 'auto';
	}
});