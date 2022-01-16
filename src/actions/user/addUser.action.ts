import { APIGatewayProxyHandler } from 'aws-lambda';
import { UserService } from '@service/user.service';
import { IUser } from '@beans/IUser';
import ResponseModel from '@models/response.model';

const addUser: APIGatewayProxyHandler  = async (event) => {
  
    let response;
    console.log("Adding new User",event.body);
    
    const requestData:IUser = JSON.parse(event.body)
  
    return UserService.addUser(requestData)
        .then((name:String)=>{
          response = new ResponseModel({name},200,"User successfully added")
        })
        .catch((error)=>{
          console.log(error)
          response = (error instanceof ResponseModel) ? error : new ResponseModel({}, 500, 'User could not be added');
        })
        .then(()=>{
          return response.generate()
        })
  }

export const main = addUser;