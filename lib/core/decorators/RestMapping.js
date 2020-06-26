import store from '../store';

function RestMapping(arg) {
	if (!arg) {
		console.log("RestMapping's arguments is undefined!");
		return;
	}

	return function(target, name, descriptor) {
		let key = null;
		let method = 'any';
		let fuc = null;

		switch (typeof arg) {
			case 'string':
				key = arg;
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
			const currentName = target.name;
			if (!store.RestMappings[currentName]) {
				store.RestMappings[currentName] = {
					root: key,
					rootMethod: method
				};
			}
			store.RestMappings[currentName] = {
				...store.RestMappings[currentName],
				root: key,
				rootMethod: method
			};
		}

		// 被装饰对象为 function
		if (typeof target === 'object') {
			const currentName = target.constructor.name;
			if (!store.RestMappings[currentName]) {
				store.RestMappings[currentName] = {};
			}
			if (!store.RestMappings[currentName].children) {
				store.RestMappings[currentName].children = [];
			}

			store.RestMappings[currentName].children.push({
				value: key,
				methodType: method,
				fuc: descriptor.value
			});
		}
	};
}

export default RestMapping;
