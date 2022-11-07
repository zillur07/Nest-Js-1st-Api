import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ProductController } from './product/controllers/product.controller';
import { BlogModule } from './blog/blog.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UserModule,
    ProductModule,
    BlogModule,],
  controllers: [
    AppController],
  providers: [AppService],
})
export class AppModule { }
