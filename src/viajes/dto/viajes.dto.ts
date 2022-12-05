import {IsString} from "class-validator";

export class ViajesDto{
    @IsString()
    pais : string;

    @IsString()
    url: string
}