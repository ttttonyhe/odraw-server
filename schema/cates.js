module.exports = {
	ID: String,
	cateName: String,
	cateType: String,
	drawStatus: {
		type: Boolean,
		default: false,
	},
	cateKey: {
		default: "",
		type: String,
	},
};
