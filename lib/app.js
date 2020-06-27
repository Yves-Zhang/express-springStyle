import store from './core/store';
import app from './server'

const applications = store.applications;
if (!applications || !applications.length) {
	console.log('disappearance application class！！！');
} else {
	applications.map((item) => {
		const Item = item;
		const application = new Item();
		application.start();
	});
}
