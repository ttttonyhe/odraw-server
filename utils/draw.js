const randomNumber = require("math-random");

// Fisher-yates 洗牌函数
const shuffle = (input) => {
	for (var i = input.length - 1; i >= 0; i--) {
		var randomIndex = Math.floor(Math.random() * (i + 1));
		var itemAtIndex = input[randomIndex];
		input[randomIndex] = input[i];
		input[i] = itemAtIndex;
	}
	return input;
};

const drawNumberArray = (length) => {
	let drawNumberArray = [];
	// 创建项目集合数组长度一致的数字数组
	for (let i = 1; i < length + 1; ++i) {
		drawNumberArray[drawNumberArray.length] = i;
	}
	drawNumberArray = shuffle(drawNumberArray);
	return drawNumberArray;
};

module.exports = {
	drawNumberArray,
	randomNumber,
};
