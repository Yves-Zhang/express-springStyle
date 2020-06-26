import app from '../../server';
import { yamlConfig } from '../../server/configManage';

const showBanner = require('node-banner');

const port = yamlConfig?.port || 3000

class NodeApplication{
	start(){
		app.listen(port, async ()=>{
			// await showBanner('express SpringStyle', 'Application start......');
		});
	}
}

export default NodeApplication