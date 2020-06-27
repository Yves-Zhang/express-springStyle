const createRouters = (app, express) => (controllers, mappings) => {
	controllers.map((contro, index) => {
		let item = mappings[contro.name]
		let indexRouter = item.root ? express.Router() : app;

		if (item.children && item.children.length) {
			item.children.map((router, current) => {
				let method;
				if (router.methodType === 'any' && item.rootMethod !== 'any') {
					method = item.rootMethod;
				}

				if (router.methodType !== 'any') {
					method = router.rootMethod;
				}

				const Clazz = contro.clazz
				const Fuc = new Clazz();
				if (method) {
					indexRouter[method](router.value, Fuc.ControllerBeforeMapping, (req, res, next) => {
						const data = method === 'get' ? req.query : req.body;
						Fuc[router.fuc](data, res, {req, res, next});
					});
				} else {
					indexRouter.get(router.value, Fuc.ControllerBeforeMapping, (req, res, next) => {
						const data = req.query
						Fuc[router.fuc](data, res, {req, res, next});
					});

					indexRouter.post(router.value, Fuc.ControllerBeforeMapping, (req, res, next) => {
						const data = req.body
						Fuc[router.fuc](data, res, {req, res, next});
					});
				}
			});
		}

		if (item.root) {
			app.use(item.root, indexRouter);
		}
	});
};

export default createRouters;
