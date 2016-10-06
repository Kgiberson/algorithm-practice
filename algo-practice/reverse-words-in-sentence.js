// Reverse words in a sentence

let replaceAt = function(string, index, character) {
	return string.substr(0, index) + character + string.substr(index + character.length);
};

let str_rev = function(str, start, end) {
	if (!str || str.length < 2) {
		return;
	};
	while (start < end) {
		let temp = str[start];
		str = replaceAt(str, start, str[end]);
		str = replaceAt(str, end, temp);
		start++;
		end--;
	}
	return str;
};

let reverse_words = function(sentence) {
	if (!sentence || sentence.length === 0) {
		return;
	}
	let str_len = sentence.length;
	sentence = str_rev(sentence, 0, str_len - 1);

	// Iterate over sentence and reverse each word in place
	let start = 0;
	let end = 0;
	while (true) {
		while (sentence[start] === ' ') {
			start++;
		}
		if (start >= sentence.length) {
			break;
		}
		end = start + 1;
		while (end < sentence.length && sentence[end] !== ' ') {
			end++;
		}
		sentence = str_rev(sentence, start, end - 1);
		start = end;
	}
	return sentence;
}