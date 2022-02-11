import { Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostSchema, Posts } from './schemas/posts.schema';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ 
      name: Posts.name, 
      schema: PostSchema
    }])
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
