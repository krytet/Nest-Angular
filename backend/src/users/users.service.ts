import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createUser = new this.userModel(createUserDto);
        return createUser.save();
    }

    async getUser(username: string): Promise<User | undefined> {
        return await this.userModel.findOne({ username }).exec();
    }


}
