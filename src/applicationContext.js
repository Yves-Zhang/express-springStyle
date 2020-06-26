import {
    NodeApplication,
    Application
} from '../lib/core';

import './controllers/TestController'
import './controllers/NewTestController'

@Application
class ApplicationContext extends NodeApplication {

}

export default ApplicationContext;