import {
    NodeApplication,
    Application,
    CombineMiddleWare,
    yamlConfig
} from '../lib/core';

import './controllers/TestController'
import './controllers/NewTestController'

import LogMiddleWare from './middleWares'

@Application
@CombineMiddleWare(LogMiddleWare)
class ApplicationContext extends NodeApplication {
    applicationBeforeMounted(app) {}
    applicationMounted(...arg) {
        // console.log(yamlConfig)
    }
}

export default ApplicationContext;