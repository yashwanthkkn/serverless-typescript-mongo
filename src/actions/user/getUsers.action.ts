import { APIGatewayProxyHandler } from 'aws-lambda';
import { UserService } from '@service/user.service';
import { IUser } from '@beans/IUser';
import ResponseModel from '@models/response.model';


const getUsers: APIGatewayProxyHandler =async () => {
    let response;
    console.log("Getting all the Users");
  
    return UserService.getUsers()
      .then((users:IUser[])=>{
        response = new ResponseModel({users},200,"Returned all the users")
      })
      .catch((error)=>{
        console.log(error)
        response = (error instanceof ResponseModel) ? error : new ResponseModel({}, 500, 'Users could not be retreived');
      })
      .then(()=>{
        return response.generate()
      })
  
  }

export const main = getUsers