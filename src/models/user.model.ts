import { Schema, model } from 'mongoose';
import { IUser } from 'src/beans/IUser';

const schema = new Schema<IUser>({
name: { type: String, required: true },
email: { type: String, required: true },
password: {type: String, required: true}
});

export const UserModel = model<IUser>('User', schema);
  