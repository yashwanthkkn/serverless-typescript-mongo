import { UserModel } from "@models/user.model";
import { Api } from "src/decorators/api.decorator";
import { IUser } from "@beans/IUser";

export class UserService{
    @Api
    static addUser(user:IUser){
        return new Promise(async(resolve,reject)=>{
            try{
                let temp = new UserModel(user);
                await temp.save()
                resolve(temp.name)
            }catch(error){
                reject(error)
            }
        })
    }

    @Api
    static getUsers(){      
        return new Promise(async(resolve,reject)=>{
            try{
                let users = await UserModel.find({});
                resolve(users)
            }catch(error){
                reject(error)
            }
        })
    }

    @Api
    static getUser(userId:String){
        return new Promise(async(resolve,reject)=>{
            try{
                let user = await UserModel.findById(userId);
                resolve(user)
            }catch(error){
                reject(error)
            }
        })
    }

    @Api
    static updateUser(user:IUser){
        return new Promise(async(resolve,reject)=>{
            try {
                await UserModel.updateOne({email:user.email},user)
                resolve(user)
            } catch (error) {
                reject(error)
            }
        })
    }
}