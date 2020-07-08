import {
    NodeApplication,
    Application,
    CombineMiddleWare
} from '../lib/core';

import './controllers/TestController'
import './controllers/NewTestController'

import LogMiddleWare from './middleWares'

@Application
@CombineMiddleWare(LogMiddleWare)
class ApplicationContext extends NodeApplication {}

export default ApplicationContext;