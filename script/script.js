function toggleSection(sectionID) {
	document.querySelector(".active-content").classList.remove("active-content");
	document.getElementById(sectionID).classList.add("active-content");
}