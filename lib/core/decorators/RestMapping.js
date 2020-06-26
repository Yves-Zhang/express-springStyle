import store from '../store';

function RestMapping(arg) {
	if (!arg) {
		console.log("RestMapping's arguments is undefined!");
		return;
	}

	return function (target, name, descriptor) {

		let key = null
		let method = 'any'

		switch (typeof arg) {
			case 'string':
				key = arg
				break;
			case 'object':
				key = arg.value;
				method = arg.method || 'any';
				break;
			default:
				console.error("expect arguments' type is string | object, unexpect " + `${typeof arg}`);
				break;
		}

		// 被装饰对象为 class
		if (typeof target === 'function') {
			console.log(target.name, 1231231)
			store.RestControllers[target.name] = {
				root: key,
				rootMethod: method
			}
		}

		// 被装饰对象为 function 
		if (typeof target === 'object') {
			console.log(target.constructor.name, name, descriptor)
			if(!store.RestControllers[target.constructor.name]){
				store.RestControllers[target.constructor.name] = {}
			}
		}
	};
}

export default RestMapping;