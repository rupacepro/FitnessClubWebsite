
function menuToggler() {
	const x = document.getElementById("navigations");
	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
	}
}