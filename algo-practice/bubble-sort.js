function bubbleSort(array) {
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < array.length; i++) {
			let temp;
			if (array[i] > array[i + 1]) {
				temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
				swapped = true;
			} 
		}
	} while (swapped);
	return array;
}


// bubbleSort is not efficient