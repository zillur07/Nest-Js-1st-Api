import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../services/product.service';



@Controller()
export class ProductController {


    constructor(private productS: ProductService) { }


    @Get('/api/products')
    getAllProducts() {
        return this.productS.getAllProducts()
    }


    @Get('/api/products/:id')
    getSinglProduct() {
        return this.productS.getSinglProduct()
    }


}
