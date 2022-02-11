import { Types } from "mongoose";
import { User } from "src/users/schemas/users.schema";

export class CreatePostDto {
    //TODO убрать автора
    author: string
    readonly title: string
    readonly text: string

}
