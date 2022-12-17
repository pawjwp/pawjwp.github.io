function toggleSection(sectionID) {
	document.querySelector(".active-content").classList.remove("active-content");
	document.getElementById(sectionID).classList.add("active-content");
}

window.onhashchange = function(event) {
	switchSection();
}
window.onload = function(event) {
	switchSection();
}

function switchSection() {
	switch(window.location.hash) {
		case "#!home":
			toggleSection('home');
			break;
		case '#!features':
			toggleSection('features');
			break;
		case "#!quests":
			toggleSection('quests');
			break;
		case "#!maps":
			toggleSection('maps');
			break;
		case "#!items":
			toggleSection('items');
			break;
		case "#!bags":
			toggleSection('bags');
			break;
		case "#!tinkers":
			toggleSection('tinkers');
			break;
		case "#!contact":
			toggleSection('contact');
			break;
		default:
			toggleSection('home');
			break;
	}
    //window.location.hash = "#my-new-hash";
};