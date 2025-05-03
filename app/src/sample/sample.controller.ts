import { Controller , Get } from "@nestjs/common";


@Controller('sample')
export class SampleController {
  @Get()
  getData(){
    return { message: 'Sucess! you have access.' };
  }
}