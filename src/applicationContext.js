import {
    NodeApplication,
    Application,
    CombineMiddleWare,
    yamlConfig
} from '../lib/core';

import './controllers/TestController'
import './controllers/NewTestController'

@Application
@CombineMiddleWare()
class ApplicationContext extends NodeApplication {
    applicationBeforeMounted(app) {}
    applicationMounted(...arg) {
        console.log(yamlConfig)
    }
}

export default ApplicationContext;