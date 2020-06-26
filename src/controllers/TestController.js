import { RestMapping, RestController } from '../../lib/core';

@RestController
@RestMapping('/test')
class TestController {
	@RestMapping('/user')
	getUser() {}
}

export default TestController;
