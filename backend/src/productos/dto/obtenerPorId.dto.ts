import { IsNotEmpty, IsNumberString } from 'class-validator';

export class obtenerPorId {
  @IsNumberString()
  @IsNotEmpty()
  readonly id: string;
}
