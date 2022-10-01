function Lab01() {
	var array1 = [];
	var total = 0;
	var array2 = [];

	for (var i = 0; i < 5; i++) {
		var val = Math.floor(100 * Math.random());
		array1.push(val);
		total += val;
	}

	var mean = total / array1.length;
	console.log(mean);

	for (var i = 0; i < 5; i++) {
		if (array1[i] > mean) {
			array2.push(array1[i]);
		}
	}

	document.querySelector("#array1Out").innerHTML = "Array: " + array1 + "<br>Mean: " + mean + "<br>Greater than mean: " + array2;
}