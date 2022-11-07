

import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller()
export class UserController {
    constructor(private userService: UserService) { }
    @Get('/api/users')
    getAllUser() {
        return this.userService.getAllUser();
    }

    @Get('/api/users/:id')
    getSingleUser() {
        return this.userService.getSingleUser();
    }



}
