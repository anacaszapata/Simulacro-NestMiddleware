import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AutosController } from './autos.controller';
import { AutosService } from './autos.service';
import{MongooseModule}from '@nestjs/mongoose';
import{Autos,AutosSchema}from './student.entity';
import { myMiddleware } from './middleware';


@Module({
  imports:[
    MongooseModule.forFeature([{name: Autos.name,schema:AutosSchema}]),
  ],
  controllers: [AutosController],
  providers: [AutosService]
})
export class AutosModule {
  configure(consumer:MiddlewareConsumer){
    consumer.apply(myMiddleware).forRoutes("autos")
  }
}
