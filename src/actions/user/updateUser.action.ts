import { APIGatewayProxyHandler } from 'aws-lambda';
import { UserService } from '@service/user.service';
import { IUser } from '@beans/IUser';
import ResponseModel from '@models/response.model';

const updateUser: APIGatewayProxyHandler =async (event) => {
    let response;
    console.log("Updating user")
    const user:IUser = JSON.parse(event.body)
    return UserService.updateUser(user)
      .then((user:IUser)=>{
        response = new ResponseModel({user},200,"updated the user the user")
      })
      .catch((error)=>{
        console.log(error)
        response = (error instanceof ResponseModel) ? error : new ResponseModel({}, 500, 'User could not be updated');
      })
      .then(()=>{
        return response.generate()
      })
  }

export const main = updateUser;