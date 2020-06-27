import store from '../store';

function CombineMiddleWare(...arg) {
    return function (target, name, descriptor) {
        // 被装饰对象为 function 
        if (typeof target === 'object') {
            return
        }

        // 被装饰对象为 class
        if (typeof target === 'function') {
            if (!target.prototype.CombineMiddleWare) {
                target.prototype.CombineMiddleWare = (app) => {
                    arg.map(item =>{
                        app.use(item)
                    })
                }
            }
        }
    }
}

export default CombineMiddleWare;