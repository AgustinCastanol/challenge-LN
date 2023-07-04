import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Category } from './category.entity';
import { Estado } from './state.entity';
@Entity({ name: 'producto' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sku: number;

  @Column()
  id_categoria: number;

  @Column()
  nombre_producto: string;

  @Column('text')
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column()
  id_estado: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'id_categoria', referencedColumnName: 'id' })
  categoria: Category;

  @ManyToOne(() => Estado)
  estado: Estado;
}
