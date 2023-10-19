import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { product } from './entities/product.entity';


@Injectable()
export class ProductService { 
  constructor (
    @InjectRepository(product)
    private productRepository : Repository<product>
  ){}
  create(createProductDto: CreateProductDto) {
     const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
  }

  findAll():Promise<product[]>{
    return this.productRepository.find();
  }

  findBy(id: number) {
    return this.productRepository.findBy({id}); 
    }

 async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productRepository.update(id,updateProductDto);
  }

  async remove(id: number) {
    return await this.productRepository.softDelete({id});
   }
}
