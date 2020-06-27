import {
	RestMapping,
	RestController
} from '../../lib/core';

@RestController
class NewTestController {

	name = 'zhangsan'

	@RestMapping('/user')
	getUser(req, res) {
		console.log(req)
		res.send("hello");
	}
}

export default NewTestController;