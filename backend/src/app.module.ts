import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    //MongooseModule.forRoot(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.pasoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
    MongooseModule.forRoot('mongodb+srv://krytet:krytet@cluster0.pasoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    UsersModule,
    AuthModule,
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
