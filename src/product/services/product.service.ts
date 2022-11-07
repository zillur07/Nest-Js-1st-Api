/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

    getAllProducts() {
        return [
            {
                id: '1',
                name: 'Mobile',
                price: 60000,
                reting: 4.2,
                model: {
                    name: 'Nokia',
                    model: 'N500'

                }
            },
            {
                id: '2',
                name: 'Computer',
                price: 560000,
                reting: 3.5,
                model: {
                    name: 'Samsung',
                    model: 'S500'

                }
            },
            {
                id: '3',
                name: 'Laptop',
                price: 60000,
                reting: 5.0,
                model: {
                    name: 'Dell',
                    model: 'D500'

                }
            }
        ]
    }

    getSinglProduct() {
        return [
            {
                id: '1',
                name: 'Mobile',
                price: 60000,
                reting: 4.2,
                model: {
                    name: 'Nokia',
                    model: 'N500'

                }
            }
        ]
    }
}
