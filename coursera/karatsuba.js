function karatSuba(x,y) {
	let x1, x0, y1, y0, m;
	let base = 10;

	if ((x < base)||(y < base)) {
		console.log( " X - y  = ", x, y, x * y)
		return x * y;
	}

	var dummy_x = x.toString();
	var dummy_y = y.toString();

	var n = (dummy_x.length > dummy_y.length) ? dummy_y.length : dummy_x.length;
	m = Math.round(n/2);

	var high1 = parseInt(dummy_x.substring(0, dummy_x.length-m));
	var low1 = parseInt(dummy_x.substring(dummy_x.length-m, dummy_x.length));

	var high2 = paseInt(dummy_y.substring(0, dummy_y.length-m));
	var low2 = parseInt(dummy_y.substring(dummy_y.length-m, dummy_y.length));

	var z0 = karaSuba(low1, low2);
	var z1 = karaSuba(low1 + high1, low2 + high2);
	var z2 = karatSuba(high1, high2);

	var result = (z2 * Math.pow(10, 2 * m)) + ( (z1-z2-z0) * Math.pow(10, m)) + z0;

	return result;
}