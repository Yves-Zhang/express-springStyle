import store from '../store';

function RestController(target, name, descriptor) {
	// 被装饰对象为 function 
	if (typeof target === 'object') {
		return
	}

	// 被装饰对象为 class
	if (typeof target === 'function') {
		store.RestControllers.push({
			name: target.name,
			clazz: target 
		});
	}
}

export default RestController;