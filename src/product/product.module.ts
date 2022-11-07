import { ProductService } from './services/product.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';

@Module({
    imports: [],
    controllers: [
        ProductController,
    ],
    providers: [
        ProductService,],
})
export class ProductModule { }
