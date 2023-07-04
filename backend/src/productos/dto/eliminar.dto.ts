import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class EliminarDto {
  @IsNotEmpty()
  @IsNumber()
  id: string;
}
