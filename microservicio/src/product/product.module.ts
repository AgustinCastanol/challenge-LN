import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { Product } from 'src/entities/product.entity';
import { Estado } from 'src/entities/state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category, Estado])],
  exports: [TypeOrmModule],
})
export class ProductModule {}
