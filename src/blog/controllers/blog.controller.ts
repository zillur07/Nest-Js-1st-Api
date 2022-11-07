import { Controller, Get } from '@nestjs/common';


@Controller()
export class BlogController {
    @Get('/api/blogs')

    getAllBlogs() {
        return {
            data: [
                {
                    name: 'zillur',
                    age: 25,
                },
                {
                    name: 'Icon',
                    age: 95,
                }
            ]
        }
    }

}
