import store from '../store';

function RestMapping(arg) {
	if (!arg) {
		console.log("RestMapping's arguments is undefined!");
		return;
	}

	return function(target, name, descriptor) {
		console.log(target.constructor.name, name, descriptor, arg);
		console.log(typeof target, typeof name, typeof descriptor, arg);
		console.log('=======================');

		// 被装饰对象为 class
		if(typeof target === 'function'){

		}

		// 被装饰对象为 function 
		if(typeof target === 'object'){}



		switch (typeof arg) {
			case 'string':
				store.RestMappings[arg] = {
					fuc: target,
					method: 'any'
				};
				break;
			case 'object':
				const key = arg.value;
				const method = arg.method || 'any';
				store.RestMappings[key] = {
					fuc: target,
					method: method
				};
				break;
			default:
				console.error("expect arguments' type is string | object, unexpect " + `${typeof arg}`);
				break;
		}
	};
}

export default RestMapping;
