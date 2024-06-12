const Excel = require("exceljs");
const fs = require("fs");

const jsonToExcel = (name, data) => {
	var start_time =
		Math.round(new Date().getTime() / 1000) + Math.floor(Math.random() * 10);
	const fileName = start_time;

	// 创建 xlsx 文件
	fs.writeFile(
		__dirname + "/../files/download/" + fileName + ".xlsx",
		"",
		"utf8",
		function (error) {
			if (error) {
				throw Error(error);
			}
		}
	);

	var workbook = new Excel.stream.xlsx.WorkbookWriter({
		filename: __dirname + "/../files/download/" + fileName + ".xlsx",
	});
	var worksheet = workbook.addWorksheet(name);

	// 样式设置
	worksheet.headerFooter.firstHeader = name;
	worksheet.properties.defaultRowHeight = 35;
	worksheet.properties.defaultColWidth = 20;
	worksheet.pageSetup.horizontalCentered = true;

	worksheet.columns = [
		{
			header: "学校类型",
			key: "schoolType",
		},
		{
			header: "学校名称",
			key: "schoolName",
		},
		{
			header: "项目名称",
			key: "projectName",
		},
		{
			header: "项目分组",
			key: "projectCate",
		},
		{
			header: "项目抽签号",
			key: "drawNumber",
		},
		{
			header: "是否查看",
			key: "drawViewStatus",
		},
	];

	// 添加数据
	for (let i in data) {
		worksheet.addRow(data[i]).commit();
	}
	workbook.commit();

	return fileName;
};

module.exports = jsonToExcel;
