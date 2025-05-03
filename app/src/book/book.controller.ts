import { Controller, Get, Post } from '@nestjs/common';

@Controller('book')
export class BookController {


    @Get('/all')
    findAll(): string  {
        return 'This action returns all Book';
    }

    @Post('/create')
    create(): string {
        return 'This action adds a new book';
    }

}


