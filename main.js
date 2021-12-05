function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

const progress1 = document.querySelector('#progress1');
const progress2 = document.querySelector('#progress2');
const progress3 = document.querySelector('#progress3');
const progress4 = document.querySelector('#progress4');
const progress5 = document.querySelector('#progress5');
const progress6 = document.querySelector('#progress6');
const progress7 = document.querySelector('#progress7');
const progress8 = document.querySelector('#progress8');

progress1.style.width = progress1.getAttribute('data-done') + '%';
progress1.style.opacity = 1;

progress2.style.width = progress2.getAttribute('data-done') + '%';
progress2.style.opacity = 1;

progress3.style.width = progress3.getAttribute('data-done') + '%';
progress3.style.opacity = 1;

progress4.style.width = progress4.getAttribute('data-done') + '%';
progress4.style.opacity = 1;

progress5.style.width = progress5.getAttribute('data-done') + '%';
progress5.style.opacity = 1;

progress6.style.width = progress6.getAttribute('data-done') + '%';
progress6.style.opacity = 1;

progress7.style.width = progress7.getAttribute('data-done') + '%';
progress7.style.opacity = 1;

progress8.style.width = progress8.getAttribute('data-done') + '%';
progress8.style.opacity = 1;

mediumZoom('.zoom', {
	margin: 70,
})


