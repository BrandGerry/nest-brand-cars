import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';
//PARA CUANDO ENVIAN DATOS POR EL BODY COMO TIENE QUE SER Y LAS VALIDACIONES QUE DEBEN DE LLEVAR
export class UpdateCarDTO {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;
  @IsString()
  @IsOptional()
  readonly brand?: string;
  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly model?: string;
}
