import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.db_postgres_host,
      port: parseInt(process.env.db_postgres_port),
      username: process.env.db_postgres_user,
      password: process.env.db_postgres_password,
      database: process.env.db_postgres_db,
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService, ProductService],
})
export class AppModule {}
