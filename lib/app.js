import { prasePath } from './tools';
import store from './core/store';
import { yamlConfig } from './server/configManage';

const appFileName = yamlConfig?.application?.fileName || 'src';
const mainJs = yamlConfig?.application?.mainJs || 'applicationContext';
const applicationPath = prasePath.cwdPath + `/${appFileName}/${mainJs}.js`;
require(applicationPath).default;

const applications = store.applications;
if (!applications || !applications.length) {
	console.log('缺少application类！！！');
} else {
	applications.map((item) => {
		const Item = item;
		const application = new Item();
		application.start();
	});
}
