import { Module, NestModule ,MiddlewareConsumer} from "@nestjs/common";
import { SampleController } from "./sample.controller";

import { ApiKeyMiddleware } from "../login-middleware/api-key.middleware";



@Module({
    controllers: [SampleController],
  })
export class SampleModule implements NestModule{
    configure(consumer : MiddlewareConsumer) {
        consumer.apply(ApiKeyMiddleware).forRoutes('sample');
}
}