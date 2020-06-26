import {
	RestMapping,
	RestController
} from '../../lib/core';

@RestController
class NewTestController {

	name = 'zhangsan'

	@RestMapping('/user')
	getUser(req, res) {
		res.send(this.name);
	}
}

export default NewTestController;