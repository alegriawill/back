import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type LugaresDocument = Lugares & Document

@Schema()
export class Lugares{
    @Prop({required:true})
    pais : string;
    @Prop({required:true})
    lugar : string;
    @Prop({required:true})
    url : string;
    @Prop({required:true})
    descripcion : string
}

export const LugarSchema = SchemaFactory.createForClass(Lugares)