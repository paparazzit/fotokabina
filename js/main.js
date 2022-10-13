// SETTING CIRCLES
let circle_dims = document.querySelectorAll(".circ");

function setUp() {
	circlesHeights();
}
function circlesHeights() {
	circle_dims.forEach((dims) => {
		dims.style.height = `${dims.offsetWidth}px`;
	});
}

window.addEventListener("load", setUp);

// Proba
window.addEventListener("dblclick", slider);
let item = document.querySelector(".item");

function slider() {
	item.classList.toggle("active");
}

// INTERSECTION OBSERVER

let options = {
	root: null,
	rootMargin: "-350px -50px ",
	// threshold: 0.05,
};

let inView = document.querySelectorAll(".inView");

let observer = new IntersectionObserver(beTouching, options);

inView.forEach((element) => {
	observer.observe(element);
});

function beTouching(entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			console.log(entry);
			entry.target.classList.add("active");
		} else {
			entry.target.classList.remove("active");
		}
	});
}
