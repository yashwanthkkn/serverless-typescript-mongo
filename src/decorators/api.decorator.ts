import { DbConfig } from "../config/db.config";

// class level decorator
// export const Api = (init: Function) =>{
//     new DbConfig();
// }

// method level decorator
export const Api = (_target: any, _propertyKey: string, _descriptor: PropertyDescriptor)=>{
     new DbConfig().connectDb();
}