/* For projects animation */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");

		var panel = this.nextElementSibling;
		panel.classList.toggle("active-panel");
		panel.classList.toggle("inactive-panel");
	});
}

/* girl animation */
var classesToRemove = ["look-right", "look-left", "look-down", "look-up", "look-down-right", "look-down-left", "look-up-right", "look-up-left"];

function removeClasses() {
	for (i = 0; i < classesToRemove.length; i++) {
		$(".head").removeClass(classesToRemove[i]);
		$(".hair").removeClass(classesToRemove[i]);
		$(".neck").removeClass(classesToRemove[i]);
	}
}
function direction(e) {
	//look left
	if (e.clientX <= window.innerWidth/2) {
		removeClasses();
		$(".head").addClass("look-left");
		$(".hair").addClass("look-left");
		$(".neck").addClass("look-left");
	}
	//look right
	if (e.clientX >= window.innerWidth/2) {
		removeClasses();
		$(".head").addClass("look-right");
		$(".hair").addClass("look-right");
		$(".neck").addClass("look-right");
	}
	//look down
	if (e.clientY >= (window.innerHeight - (window.innerHeight/2.5))) {
		removeClasses();
		$(".head").addClass("look-down");
		$(".hair").addClass("look-down");
		$(".neck").addClass("look-down");
	}
	//look up
	if (e.clientY <= (window.innerHeight/2.5)) {
		removeClasses();
		$(".head").addClass("look-up");
		$(".hair").addClass("look-up");
		$(".neck").addClass("look-up");
	}
	//look down right
	if (e.clientY >= (window.innerHeight - (window.innerHeight/2.5)) && e.clientX >= (window.innerWidth - (window.innerWidth/3))) {
		removeClasses();
		$(".head").addClass("look-down-right");
		$(".hair").addClass("look-down-right");
		$(".neck").addClass("look-down-right");
	}
	//look down left
	if (e.clientY >= (window.innerHeight - (window.innerHeight/2.5)) && e.clientX <= (window.innerWidth/3)) {
		removeClasses();
		$(".head").addClass("look-down-left");
		$(".hair").addClass("look-down-left");
		$(".neck").addClass("look-down-left");
	}
	//look up right
	if (e.clientY <= (window.innerHeight/2.5) && e.clientX >= (window.innerWidth - (window.innerWidth/3))) {
		removeClasses();
		$(".head").addClass("look-up-right");
		$(".hair").addClass("look-up-right");
		$(".neck").addClass("look-up-right");
	}
	//look up left
	if (e.clientY <= (window.innerHeight/2.5) && e.clientX <= (window.innerWidth/3)) {
		removeClasses();
		$(".head").addClass("look-up-left");
		$(".hair").addClass("look-up-left");
		$(".neck").addClass("look-up-left");
	}
	//look forward
	if (e.clientY > window.innerHeight/2.5 &&
		e.clientY < (window.innerHeight - (window.innerHeight/2.5)) &&
		e.clientX > window.innerWidth/3 &&
		e.clientX < (window.innerWidth - (window.innerWidth/3))) {
		removeClasses();
	}
	// console.log(document.getElementsByClassName("head"));
}
// removeClasses();
window.addEventListener("mousemove", function (e) {
  	direction(e);
})