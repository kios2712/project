import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([product])],

  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
