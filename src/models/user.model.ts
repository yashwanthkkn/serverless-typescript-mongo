import { Schema, model } from 'mongoose';

interface User {
    name: string;
    email: string;
    password: string;
}

const schema = new Schema<User>({
name: { type: String, required: true },
email: { type: String, required: true },
password: {type: String, required: true}
});

export const UserModel = model<User>('User', schema);
  