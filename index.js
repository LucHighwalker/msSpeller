const { keys, findKey } = require("./lib/keys");

const keyboard = "qwerty";

getKeyStrokes = word => {
	const strokes = [];
	for (let i = 0; i < word.length; i++) {
		strokes.push(findKey("qwerty", word[i]));
	}
	return strokes;
};

typeOutWord = strokes => {
	word = "";
	strokes.forEach(k => {
		word = `${word}${keys[keyboard][k[0]][k[1]]}`;
	});
	return word;
};

String.prototype.mistype = function(chance = 0.25) {
	const keyStrokes = getKeyStrokes(this);
	keyStrokes.map(key => {
		const newKey = key;
		if (chance > Math.random()) {
			if (chance / 2 > Math.random()) {
				switch (key[0]) {
					case 0:
					case 2:
						newKey[0] = 1;
						break;

					case 1:
						newKey[0] = 0.5 > Math.random() ? 2 : 0;
						break;
				}
			}
      newKey[1] = 0.5 > Math.random() ? key[1] - 1 : key[1] + 1;
      newKey[1] = newKey[1] < 0 ? newKey[1] + 2 : newKey[1];
      newKey[1] = newKey[1] > keys[keyboard][newKey[0]].length ? newKey[1] - 2 : newKey[1];
			return newKey;
		} else {
			return key;
		}
  });
  return typeOutWord(keyStrokes);
};

String.prototype.mistypeMany = function(count, chance = 0.25) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(this.mistype(chance))
  }
  return result;
}

console.log("spelling".mistypeMany(100));

// console.log(typeOutWord([[0, 2], [1, 6], [1, 1], [0, 5]]));
