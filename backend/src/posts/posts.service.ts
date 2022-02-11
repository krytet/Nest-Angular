import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserFromJWT } from 'src/users/interfaces/userFromJWT.interface';
import { User } from 'src/users/schemas/users.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Posts, PostsDocumet } from './schemas/posts.schema';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Posts.name) private postModel: Model<PostsDocumet>) {}

    async create(createPostDto: CreatePostDto, user: UserFromJWT) {
        createPostDto.author = user.userId
        const createPost = new this.postModel(createPostDto);
        return createPost.save()
    }

    async getAllPosts() {
        return await this.postModel.find()
    }

    async getMyPost(user: UserFromJWT) {
        return await this.postModel.find({
            author: user.userId,
        })
    }

    async getPost(id: string) {
        return await this.postModel.findById(id)
    }

    async delete(id: string, user: UserFromJWT) {
        const post = await this.postModel.findById(id)
        if (user.userId == String(post.author)) {
            await post.delete()
            return 'Успешно удалено'
        }
        else {
            return 'Вы являетесь не автором записи'
        }
    }

    async update(id: string, updatePostDto: UpdatePostDto, user: UserFromJWT) {
        const post = await this.postModel.findById(id)
        if (user.userId == String(post.author)) {
            return await this.postModel.findByIdAndUpdate(id, updatePostDto, {new: true})
        }
        else {
            return 'Вы являетесь не автором записи'
        }
    }

}
