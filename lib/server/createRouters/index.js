const createRouters = (app, express) => (controllers, mappings) => {
	controllers.map((contro, index) => {
		let item = mappings[contro]
		let indexRouter = item.root ? express.Router() : app;

		console.log(controllers, mappings)
		console.log(item)

		if (item.children && item.children.length) {
			item.children.map((router, current) => {
				let method;
				if (router.methodType === 'any' && item.rootMethod !== 'any') {
					method = item.rootMethod;
				}

				if (router.methodType !== 'any') {
					method = router.rootMethod;
				}

				if (method) {
					indexRouter[method](router.value, (req, res, next) => {
						router.fuc(req, res, next);
					});
				} else {
					indexRouter.get(router.value, (req, res, next) => {
						router.fuc(req, res, next);
					});

					indexRouter.post(router.value, (req, res, next) => {
						router.fuc(req, res, next);
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
