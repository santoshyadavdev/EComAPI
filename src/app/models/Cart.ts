import { Schema, model } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const CartSchema = new Schema({
    productId: {
        type: ObjectId,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'A'
    },
    createOn: {
        type: Date,
        default: new Date()
    },
    modifiedOn: {
        type: Date
    }
});

export const Cart = model('Cart', CartSchema)
