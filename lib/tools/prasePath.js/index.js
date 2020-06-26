const { resolve } = require('path');

// 返回运行文件所在的目录
const pathLog = () => {
	console.log('__dirname : ' + __dirname);
	console.log('resolve   : ' + resolve('./'));
	console.log('cwd       : ' + process.cwd());
};

export default {
	log: pathLog,
	resolve: resolve('./'),
	cwdPath: process.cwd()
};
