// import ResponseModel from "src/models/response.model"

class UserApi{
    static addUser(event){
        return new Promise(async(resolve,reject)=>{
            try{
                console.log(event.body);
                resolve(true)
            }catch(err){
                reject(err)
            }
        })
    }

    static sayHello(event){
        console.log(event);
        return "Hello"
    }
}

export const  sayHello = UserApi.sayHello