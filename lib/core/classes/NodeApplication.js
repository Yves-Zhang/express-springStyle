import app from '../../server';
import { yamlConfig } from '../../server/configManage';

const showBanner = require('node-banner');

const port = yamlConfig?.port || 3000

class NodeApplication{
	static getApplicationConfig() {
		return yamlConfig;
	}

	$_beforeMounted(app){
		if(this.applicationBeforeMounted && typeof this.applicationBeforeMounted === 'function'){
			this.applicationBeforeMounted(app)
		}
	}

	$_mounted(...arg){
		if(this.applicationMounted && typeof this.applicationMounted === 'function'){
			this.applicationMounted(...arg)
		}
	}

	start(){
		this.$_beforeMounted(app)
		app.listen(port, async (...arg)=>{
			this.$_mounted(...arg, 0)
			// await showBanner('express SpringStyle', 'Application start......');
		});
	}
}

export default NodeApplication