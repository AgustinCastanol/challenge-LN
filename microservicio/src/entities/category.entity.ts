import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'categoria' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
}
