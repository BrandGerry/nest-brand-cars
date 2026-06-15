import { IsString, MinLength } from 'class-validator';
//PARA CUANDO ENVIAN DATOS POR EL BODY COMO TIENE QUE SER Y LAS VALIDACIONES QUE DEBEN DE LLEVAR
export class CreateCarDTO {
  @IsString()
  readonly brand!: string;
  @IsString()
  @MinLength(3)
  readonly model!: string;
}
