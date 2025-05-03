import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [BookModule, UserModule , SampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
