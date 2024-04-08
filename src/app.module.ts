import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutosModule } from './autos/autos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://anacaszapata:8ToV24Hv5McIYKn0@tasks.wmosg5w.mongodb.net/',
    ),
    AutosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
