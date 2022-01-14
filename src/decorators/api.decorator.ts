import { DbConfig } from "../config/db.config";

// class level decorator
// export const Api = (init: Function) =>{
//     new DbConfig();
// }

// method level decorator
// target: any, propertyKey: string, descriptor: PropertyDescriptor
export const Api = ()=>{
     new DbConfig().connectDb();
}