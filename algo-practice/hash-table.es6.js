class HashTable {
	constructor(size) {
		this.values = {};
		this.numberOfValues = 0;
		this.size = size;
	}

	add(key, value) {
		const hash = this.calculateHash(key);
		if (!this.values.hasOwnProperty(hash)) {
			this.values[hash] = {};
		}
		if (!this.values[hash].hasOwnProperty(key)) {
			this.numberOfValues++;
		}
		this.values[hash][key] = value;
	}

	calculateHash(key) {
		return key.toString().length % this.size;
	}
}