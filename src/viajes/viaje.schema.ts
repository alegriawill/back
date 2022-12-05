import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ViajesDocument = Viaje & Document

@Schema()
export class Viaje{
    @Prop({require:true})
    pais : string;
    @Prop({required:true})
    url: string
}

export const ViajeSchema = SchemaFactory.createForClass(Viaje)