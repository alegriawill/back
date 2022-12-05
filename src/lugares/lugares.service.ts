import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lugares, LugaresDocument } from './lugares.schema';

@Injectable()
export class LugaresService {
    constructor(
        @InjectModel(Lugares.name)
        private lugarModel:
            Model<LugaresDocument>
    ) { }
    async getLugares(): Promise<Lugares[]> {
        return await this.lugarModel.find()
    }

    async getLugaresPorPais(pais: string): Promise<Lugares[]> {
        return await this.lugarModel.find({pais})
    }
}
