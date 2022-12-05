import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Viaje, ViajesDocument } from './viaje.schema';

@Injectable()
export class ViajesService {
    constructor(
        @InjectModel(Viaje.name)
        private viajeModel:
            Model<ViajesDocument>
    ) { }
    async getViajes(): Promise<Viaje[]> {
        return await this.viajeModel.find()
    }
}
