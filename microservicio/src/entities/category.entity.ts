import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Product } from './product.entity';
@Entity({ name: 'categoria' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
}
