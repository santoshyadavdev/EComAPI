import { Request, Response, NextFunction, Errback } from "express";
import { Order } from '../models/Order';



export class OrderController {

    static placeOrder(req: Request, res: Response, next: NextFunction) {
        const order = new Order(req.body);
        Order.create(order, (err: Errback, result: any) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err })
            } else {
                res.json({ status: 'success', message: 'Order Placed!', data: result._id })
            }
        });
    }
}