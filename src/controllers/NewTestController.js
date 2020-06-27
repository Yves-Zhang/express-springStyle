import {
	RestMapping,
	RestController
} from '../../lib/core';

@RestController
class NewTestController {

	name = 'zhangsan'

	@RestMapping('/user')
	getUser(data, res) {
		console.log(data)
		res.send(data);
	}
}

export default NewTestController;