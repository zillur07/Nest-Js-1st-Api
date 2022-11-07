import { BlogService } from './services/blog.service';
import { BlogController } from './controllers/blog.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        BlogController,],
    providers: [
        BlogService,],
})
export class BlogModule { }


