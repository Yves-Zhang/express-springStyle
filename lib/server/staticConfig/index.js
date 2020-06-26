import options from './defaultConfig';
import { yamlConfig } from '../configManage';
import {prasePath} from '../../tools'

const staticResource = yamlConfig?.staticResource || {}
const staticFiles = staticResource?.fileName || ["www"]

const setStaticConfig = (app, express) => {
	staticFiles.map(item => {
		const filePath = prasePath.cwdPath + `/${item}`
		app.use(express.static(filePath, options));
	})
};

export default setStaticConfig;
