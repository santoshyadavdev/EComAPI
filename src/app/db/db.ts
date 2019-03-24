import * as mongoose from 'mongoose';

export class MongoConnect {
    static connect() {
        const mongoDBConn = process.env.MONGODB_URL || '';

        return mongoose.connect(mongoDBConn, { useNewUrlParser: true });
    }
}