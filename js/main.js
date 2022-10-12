// SETTING CIRCLES
let circle_dims = document.querySelectorAll(".circ");

function setUp() {
	circlesHeights();
}
function circlesHeights() {
	circle_dims.forEach((dims) => {
		console.log(dims.offsetWidth);
		dims.style.height = `${dims.offsetWidth}px`;
	});
}

window.addEventListener("load", setUp);
