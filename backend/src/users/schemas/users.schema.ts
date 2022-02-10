import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    userId: number;

    @Prop({required: true, unique: true})
    username: string;

    @Prop()
    email: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop({default: false})
    isStaf: boolean;

    @Prop({required: true})
    password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);