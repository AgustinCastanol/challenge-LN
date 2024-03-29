import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ActualizarDto {
  @IsNumber()
  id: number;

  @IsNumber()
  sku: number;

  @IsString()
  nombre: string;

  @IsNumber()
  precio: number;

  @IsString()
  estado: string;

  @IsString()
  categoria: string;

  @IsString()
  descripcion: string;
}
