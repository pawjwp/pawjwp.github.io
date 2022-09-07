function checkTime(twelveHour, popUp) {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var date = new Date;
	
	var year = date.getFullYear();
	var month = months[date.getMonth()];
	var day = date.getDay();
	var hour = date.getHours();
	var minute = date.getMinutes();
	
	if ((hour > 12) && (twelveHour == 0)) {
		hour -= 12;
	}
	
	var dateString = "It is currently " + hour + ":" + minute + " on " + day + " " + month + " " + year;
	
	if (popUp) {
		alert(dateString);
	} else {
		document.querySelector("#timeOut").innerHTML = dateString;
	}
}