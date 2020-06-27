import store from '../store';

function CombineMiddleWare(...arg) {
    return function (target, name, descriptor) {
        // 被装饰对象为 function 
        if (typeof target === 'object') {
            return
        }

        // 被装饰对象为 class
        if (typeof target === 'function') {
            arg.map(item =>{
                store.MiddleWares.push(item)
            })
        }
    }
}

export default CombineMiddleWare;