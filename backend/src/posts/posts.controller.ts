import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Req, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/guard/local-auth.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) {}

    @Get()
    getAll() {
        return this.postService.getAllPosts() 
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @HttpCode(HttpStatus.CREATED)
    createPost(@Request() req, @Body() createPost: CreatePostDto) {
        console.log('req.user');
        console.log(req.user);
        const post = this.postService.create(createPost, req.user)
        return 'all posts'
    }

    @UseGuards(JwtAuthGuard)
    @Get('my')
    getMyPosts(@Request() req) {
        return this.postService.getMyPost(req.user)
        
    }

    @Get(':id')
    getPost(@Param('id') id: string) {
        return this.postService.getPost(id)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    UpdatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto,
               @Request() req) {
        return this.postService.update(id, updatePostDto, req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deletePost(@Param('id') id: string, @Request() req) {
        return this.postService.delete(id, req.user)
    }

    

}
