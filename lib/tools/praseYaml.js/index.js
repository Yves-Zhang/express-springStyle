import YAML from 'yamljs';

const fs = require('fs');
// file为文件所在路径
export default (filtPath) => {
	return YAML.parse(fs.readFileSync(filtPath).toString())
};