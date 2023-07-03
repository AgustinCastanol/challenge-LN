import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class ActualizarDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNumber()
  sku: number;

  @IsString()
  nombre: string;

  @IsNumber()
  precio: number;

  @IsBoolean()
  estado: boolean;

  @IsString()
  categoria: string;

  @IsString()
  descripcion: string;
}
