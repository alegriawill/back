import { IsString } from "class-validator";


export class LugaresDto{
@IsString()
pais : string;

@IsString()
lugar : string;

@IsString()
url : string;

@IsString()
descripcion : string
}