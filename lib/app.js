import store from './core/store';
import './server'

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
