import store from '../store';

function Application(target) {
	store.applications.push(target);
}

export default Application;
