import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes } from "mongoose";
import { User, UserDocument } from "src/users/schemas/users.schema";

export type PostsDocumet = Posts & Document

@Schema()
export class Posts {
    @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
    author: User

    @Prop()
    title: string

    @Prop()
    text: string
}
export const PostSchema = SchemaFactory.createForClass(Posts)
