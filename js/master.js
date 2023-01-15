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

// Send Mail

let send = document.querySelector("#send");

send.onclick = el => {
    el.preventDefault();
    sendMail();
} 

function sendMail() {
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("msg").value,
    };

    let serviceID = "service_sbzm0y9";
    let templateID = "template_yj9dach";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
        params.name = "";
        params.email = "";
        params.subject = "";
        params.message = "";
        console.log(res);
        alert("Your Message send successfully!");
    }).catch(err=>console.log(err));
}

// save inputs in sesstion storage

const inputs = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    subject: document.querySelector('#subject'),
    message: document.querySelector('#msg'),
}

inputs.name.oninput = _ => sessionStorage.setItem('name', inputs.name.value);
inputs.email.oninput = _ => sessionStorage.setItem('email', inputs.email.value);
inputs.subject.oninput = _ => sessionStorage.setItem('subject', inputs.subject.value);
inputs.message.oninput = _ => sessionStorage.setItem('message', inputs.message.value);

inputs.name.value = sessionStorage.getItem('name');
inputs.email.value = sessionStorage.getItem('email');
inputs.subject.value = sessionStorage.getItem('subject');
inputs.message.value = sessionStorage.getItem('message');