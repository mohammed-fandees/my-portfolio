// Drop down list

let down = document.querySelector('#dropdown-icon'),
	exit = document.querySelector('#close'),
	list = document.querySelector('.list');

down.onclick = (_) => (list.style.cssText = 'transform: translateY(0)');
exit.onclick = (_) => (list.style.cssText = 'transform: translateY(-100%)');

// Header style

let header = document.querySelector('header');
onscroll = _ => {
    if(window.scrollY >= 50) {
        header.style.background = "#101010";
    } else {
        header.style.background = "transparent";
    }
}

// Typewrite effect on home page

let TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function() {
	let i = this.loopNum % this.toRotate.length;
	let fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	let that = this;
	let delta = 200 - Math.random() * 100;

	if (this.isDeleting) {
		delta /= 2;
	}

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 200;
	}

	setTimeout(function() {
		that.tick();
	}, delta);
};

window.onload = function() {
	let elements = document.getElementsByClassName('typewrite');
	for (let i = 0; i < elements.length; i++) {
		let toRotate = elements[i].getAttribute('data-type');
		let period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	let css = document.createElement('style');
	css.type = 'text/css';
	css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
	document.body.appendChild(css);
};

// Change Color

let gear = document.querySelector('#gear');
let settings = document.querySelector('.settings');

let colors = {
	one: document.querySelector('#one'),
	two: document.querySelector('#two'),
	three: document.querySelector('#three'),
	four: document.querySelector('#four'),
	five: document.querySelector('#five'),
	six: document.querySelector('#six'),
	root: document.querySelector(':root')
};
const {one: c1, two: c2, three: c3, four: c4, five: c5, six: c6, root: r} = colors;
// Show & height settings  
gear.onclick = _ => settings.classList.toggle('show');

if(localStorage.getItem('color') === null) {
	onload = _ => r.style.setProperty('--main-color', '#c70039')
}

c1.onclick = _ => {
	let current = c1.getAttribute('color');
	localStorage.setItem('color', current);
	r.style.setProperty('--main-color', localStorage.getItem('color'));
}

c2.onclick = _ => {
	let current = c2.getAttribute('color');
	localStorage.setItem('color', current);
	r.style.setProperty('--main-color', localStorage.getItem('color'));
}

c3.onclick = _ => {
	let current = c3.getAttribute('color');
	localStorage.setItem('color', current);
	r.style.setProperty('--main-color', localStorage.getItem('color'));
}

c4.onclick = _ => {
	let current = c4.getAttribute('color');
	localStorage.setItem('color', current);
	r.style.setProperty('--main-color', localStorage.getItem('color'));
}

c5.onclick = _ => {
	let current = c5.getAttribute('color');
	localStorage.setItem('color', current);
	r.style.setProperty('--main-color', localStorage.getItem('color'));
}

c6.onclick = _ => {
	let current = c6.getAttribute('color');
	localStorage.setItem('color', current);
	r.style.setProperty('--main-color', localStorage.getItem('color'));
}

r.style.setProperty('--main-color', localStorage.getItem('color'));