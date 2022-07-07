import express from "express";
const router = express.Router();
import RestaurantController from "../controllers/restaurant.js";
import Auth from '../middlewares/auth.js';

const restaurantController = new RestaurantController();

router.get('/', Auth, restaurantController.all)
router.post('/reservation', Auth, restaurantController.reserve)
router.get('/reservation/logs', Auth, restaurantController.reservationLogs)

export default router;
