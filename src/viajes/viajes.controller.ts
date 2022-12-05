import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { Viaje } from './viaje.schema';
import { ViajesService } from './viajes.service';


@Controller('viajes')
export class ViajesController {
    constructor(private readonly viajesService: ViajesService){}
    @Get()
    @HttpCode(HttpStatus.OK)
    getViajes(): Promise<Viaje[]>{
        return this.viajesService.getViajes()
    }
}
