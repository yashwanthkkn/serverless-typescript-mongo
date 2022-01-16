import { APIGatewayProxyHandler } from 'aws-lambda';
import { UserService } from '@service/user.service';
import { IUser } from '@beans/IUser';
import ResponseModel from '@models/response.model';

const getUser: APIGatewayProxyHandler =async (event) => {
    let response;
    let userId = event.pathParameters.id;
    console.log("Getting User with id "+userId);
  
    return UserService.getUser(userId)
      .then((user:IUser)=>{
        response = new ResponseModel({user},200,"Returned the user")
      })
      .catch((error)=>{
        console.log(error)
        response = (error instanceof ResponseModel) ? error : new ResponseModel({}, 500, 'User could not be retreived');
      })
      .then(()=>{
        return response.generate()
      })
  }

export const main = getUser;