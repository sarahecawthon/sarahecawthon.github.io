window.addEventListener("load", function() {

var bars = document.getElementsByClassName("fa fa-bars")[0];
var dropdown = document.getElementsByClassName("menuContainer")[0];
	
bars.addEventListener("click", function() {
	if (dropdown.style.display == "flex") {
	dropdown.style.display = "none"
	} else {
	dropdown.style.display = "flex"
	}
});

});