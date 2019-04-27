import { Request, Response, NextFunction, Errback } from "express";
import { Cart } from '../models/Cart';


export class WishListController {

    static getWishList(req: Request, res: Response, next: NextFunction) {
        Cart.aggregate([
            {
                $lookup: {
                    from: 'products',
                    localField: 'productId',
                    foreignField: '_id',
                    as: 'UserCart'
                }
            }
        ], (err: Errback, result: any) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err })
            } else {
                res.json({ status: 'success', message: 'User Cart!', data: result })
            }
        })
    }

    static saveWishList(req: Request, res: Response, next: NextFunction) {
        const wishlist = new Cart(req.body);
        Cart.create(wishlist, (err: Errback, result: any) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err })
            } else {
                res.json({ status: 'success', message: 'Product added to Cart!', data: {} })
            }
        })
    }

}