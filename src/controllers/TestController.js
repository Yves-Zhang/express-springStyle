import {
	RestMapping,
	RestController
} from '../../lib/core';

@RestController
@RestMapping('/test')
class TestController {
	
	name="lisi"

	@RestMapping('/user')
	getUser(data, res) {
		res.send(data);
	}
}

export default TestController;