import {
	RestMapping,
	RestController
} from '../../lib/core';

@RestController
@RestMapping('/test')
class TestController {
	
	name="lisi"

	@RestMapping('/user')
	getUser(req, res) {
		res.send(this.name);
	}
}

export default TestController;