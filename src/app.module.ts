import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ServeStaticModule} from '@nestjs/serve-static/dist/serve-static.module'
import { join } from 'path';
import { ViajesController } from './viajes/viajes.controller';
import { LugaresController } from './lugares/lugares.controller';
import { LugaresService } from './lugares/lugares.service';
import { ViajesService } from './viajes/viajes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Viaje, ViajeSchema } from './viajes/viaje.schema';
import { Lugares, LugarSchema } from './lugares/lugares.schema';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/unviajeconalegria'), MongooseModule.forFeature([
      {
        name: Viaje.name,
        schema: ViajeSchema,
      },
      {
        name : Lugares.name,
        schema: LugarSchema,
      }

    ]),
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'fotos'),
}),],
  controllers: [AppController, ViajesController, LugaresController],
  providers: [AppService, LugaresService, ViajesService],
})
export class AppModule {}
