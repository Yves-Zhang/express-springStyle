import {
	RestMapping,
	RestController
} from '../../lib/core';

@RestController
@RestMapping('/test')
class TestController {

	@RestMapping('/user')
	getUser(req, res) {
		console.log(req)
		res.send('hello');
	}
}

export default TestController;