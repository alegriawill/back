import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { Lugares } from './lugares.schema';
import { LugaresService } from './lugares.service';

@Controller('lugares')
export class LugaresController {
    constructor(private readonly lugaresService: LugaresService){}
    @Get()
    @HttpCode(HttpStatus.OK)
    getLugares(): Promise<Lugares[]>{
        return this.lugaresService.getLugares()
    }

    @Get(":pais")
    @HttpCode(HttpStatus.OK)
    getLugaresPorPais(@Param("pais") pais: string): Promise<Lugares[]>{
        return this.lugaresService.getLugaresPorPais(pais)
    }
}
