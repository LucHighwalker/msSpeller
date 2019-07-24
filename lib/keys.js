const keys = {
	qwerty: [
		["\t", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
		["-CAPS-", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\n"],
		["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
	]
};

const findKey = (keyboard, letter) => {
	for (let r = 0; r < keys[keyboard].length; r++) {
		for (let k = 0; k < keys[keyboard][r].length; k++) {
			if (keys[keyboard][r][k] === letter) {
				return [r, k];
			}
		}
	}
	return null;
};

module.exports = {
	keys,
	findKey
};
