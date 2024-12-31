const express = require('express');
const { Dish, Service, DishType } = require('../models');
const {
	checkCreateDish,
	checkCreateService,
	checkCreateTypeDish,
} = require('../middlewares/validation/checkCreate');
const { authenticate } = require('../middlewares/auth/authenticate.js');
const { authorize } = require('../middlewares/auth/authorize.js');
const {
	createDish,
	createTypeDish,
	updateDish,
	createService,
	updateService,
	getAllReservationFilterByManager,
	updateStatusOfReservation,
	deleteTypeDish,
	updateTypeDish,
} = require('../controllers/manager.controllers');
const managerRouter = express.Router();

managerRouter.post(
	'/dish/create',
	authenticate,
	authorize(['manager']),
	checkCreateDish(Dish),
	createDish,
);

managerRouter.post(
	'/type-dish/create',
	authenticate,
	authorize(['manager']),
	checkCreateTypeDish(DishType),
	createTypeDish,
);

managerRouter.post(
	'/type-dish/delete',
	authenticate,
	authorize(['manager']),
	deleteTypeDish,
);

managerRouter.put(
	'/type-dish/update',
	authenticate,
	authorize(['manager']),
	updateTypeDish,
);

managerRouter.put(
	'/dish/update/:dishId',
	authenticate,
	authorize(['manager']),
	updateDish,
);

managerRouter.post(
	'/service/create',
	authenticate,
	authorize(['manager']),
	checkCreateService(Service),
	createService,
);

managerRouter.put(
	'/service/update/:serviceId',
	authenticate,
	authorize(['manager']),
	updateService,
);

managerRouter.get(
	'/reservation/get',
	authenticate,
	authorize(['manager']),
	getAllReservationFilterByManager,
);

managerRouter.put(
	'/reservation/update/status/:reservationId',
	authenticate,
	authorize(['manager']),
	updateStatusOfReservation,
);

module.exports = {
	managerRouter,
};
