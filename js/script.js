let side = document.getElementById("men")
document.getElementById("toggle").addEventListener("click", function(){
	side.classList.toggle("active")
});
document.getElementById("close").addEventListener("click", function(){
	side.classList.toggle("active")
});
window.onclick = function(e) {
	if
	(e.target.closest("#toggle") 
	|| e.target.closest("#men"))
	{return}
	else {
		side.classList.remove("active");
	}

};
