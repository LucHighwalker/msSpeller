const keyboards = {
	qwerty: [
		["\t", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
		["-CAPS-", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\n"],
		["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
	]
};

const findKey = (letter, kb = 'qwerty') => {
	for (let r = 0; r < keyboards[kb].length; r++) {
		for (let k = 0; k < keyboards[kb][r].length; k++) {
			if (keyboards[kb][r][k] === letter) {
				return [r, k];
			}
		}
	}
	return null;
};

const getKeyStrokes = (word, kb = "qwerty") => {
	const strokes = [];
	for (let i = 0; i < word.length; i++) {
		strokes.push(findKey(word[i], kb));
	}
	return strokes;
};

const typeOutWord = (strokes, kb = "qwerty") => {
	word = "";
	strokes.forEach(k => {
		word = `${word}${keyboards[kb][k[0]][k[1]]}`;
	});
	return word;
};

module.exports = {
	keyboards,
	findKey,
	getKeyStrokes,
	typeOutWord
};
