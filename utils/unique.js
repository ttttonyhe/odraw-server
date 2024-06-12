module.exports = function unique(array) {
	return array.filter((item, index, self) => self.indexOf(item) === index);
};
