import store from '../store';

function RestController(target, name, descriptor) {
	// 被装饰对象为 function 
	if (typeof target === 'object') {
		return
	}

	// 被装饰对象为 class
	if (typeof target === 'function') {
		if (!target.prototype.ControllerBeforeMapping) {
			target.prototype.ControllerBeforeMapping = (req, res, next) => {
				console.log(target.name + 'ControllerBeforeMapping!!!')
				next()
			}
		}
		store.RestControllers.push({
			name: target.name,
			clazz: target
		});
	}
}

export default RestController;