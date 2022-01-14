import { connect } from 'mongoose';
import ResponseModel from 'src/models/response.model';
export class DbConfig{
    connectDb(){
        connect('mongodb://localhost:27017/test')
            .catch(err=> { throw new ResponseModel({}, 500, `connection-error: ${err}`);})
    }
}