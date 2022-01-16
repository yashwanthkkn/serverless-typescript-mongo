import { APIGatewayProxyHandler } from 'aws-lambda';
import { UserService } from '@service/user.service';
import { IUser } from '@beans/IUser';
import ResponseModel from '@models/response.model';
import { validateAgainstConstraints } from '@libs/validate';
const validations = require("@validators/user/create.validator.json")

const addUser: APIGatewayProxyHandler  = async (event) => {
  
    let response;
    console.log("Adding new User",event.body);
    
    const requestData = JSON.parse(event.body)
  
    return validateAgainstConstraints(requestData,validations)
            .then(async ()=>{
              let user = await UserService.addUser(requestData)
              return user
            }) 
    // return  UserService.addUser(requestData) // if you want to test without constraints umcomment this and comment the above lines
            .then((user:IUser)=>{
              response = new ResponseModel({user},200,"User successfully added")
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