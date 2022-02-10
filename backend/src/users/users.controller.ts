import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { type } from 'os';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers() {
        return 'Hi Users'
    }

    /**@Get(':id')
    getUser(@Param('id') id:string) {
        return 'Пользователь с ID ' + id
    }*/

    @Get(':username')
    async getUserByUsername(@Param('username') username:string) {
        console.log(username);
        const user = await this.usersService.getUser(username)
        console.log(user);
        

        
        return 'Пользователь с username ' + username + user
    }

    @Post()
    createUser(@Body() User: CreateUserDto) {
        return this.usersService.create(User)
        //return 'Пользователь: ' + User.username + ' имеет пароль:' + User.password
    }







}
