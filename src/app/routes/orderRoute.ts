import { OrderController } from "../controllers/orderController";
import * as express from "express";
import { validateUser } from "../middleware/auth";


export const orderRoute = express.Router();

orderRoute.post('/', validateUser, OrderController.placeOrder);
