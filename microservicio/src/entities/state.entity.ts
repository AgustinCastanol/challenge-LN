import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'estado' })
export class Estado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  // Otras propiedades del estado
}
