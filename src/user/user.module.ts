import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        UserController,],
    providers: [
        UserService,],
})
export class UserModule { }
