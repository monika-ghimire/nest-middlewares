import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get('/all')
    findAll(): string  {
        return 'This action returns all users';
    }

    @Post('/create')
    create(): string {
        return 'This action adds a new user';
    }
}
