import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { Product } from 'src/entities/product.entity';
import { Estado } from 'src/entities/state.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Estado) private estadoRepository: Repository<Estado>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find({
      relations: ['categoria', 'estado'],
    });
  }

  async findCategory(categoria: string): Promise<Category> {
    return this.categoryRepository.findOne({
      where: { nombre: categoria },
    });
  }
  async findState(estado: string): Promise<Estado> {
    return this.estadoRepository.findOne({
      where: { nombre: estado },
    });
  }

  findOne(id: string): Promise<Product> {
    const numberId = parseInt(id);
    return this.productsRepository.findOne({
      where: { id: numberId },
      relations: ['categoria', 'estado'],
    });
  }

  async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }

  async create(product: Product): Promise<Product> {
    return this.productsRepository.save(product);
  }

  async update(id: string, product: Product): Promise<Product> {
    const numberId = parseInt(id);
    await this.productsRepository.update(id, product);
    return this.productsRepository.findOne({
      where: { id: numberId },
      relations: ['categoria', 'estado'],
    });
  }
}
