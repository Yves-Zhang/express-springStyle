import store from '../store';

function RestController(target, name, descriptor) {
	store.RestControllers.push(target);
}

export default RestController;
