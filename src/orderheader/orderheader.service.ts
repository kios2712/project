import { Injectable } from '@nestjs/common';
import { CreateOrderheaderDto } from './dto/create-orderheader.dto';
import { UpdateOrderheaderDto } from './dto/update-orderheader.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Orderheader } from './entities/orderheader.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class OrderheaderService {
  findBy(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Orderheader)
    private orderHeaderRepository: Repository<Orderheader>
  ){
  }
  create(createOrderheaderDto: CreateOrderheaderDto) {
    const newOrder = this.orderHeaderRepository.create(createOrderheaderDto);
    return  this.orderHeaderRepository.save(newOrder);
  }

  findAll(options?: FindManyOptions<Orderheader>):Promise<Orderheader[]> {
    return this.orderHeaderRepository.find(options);
  }

  findOne(id: number) {
    return this.orderHeaderRepository.findBy({id});
  }

  async update(id: number, updateOrderheaderDto: UpdateOrderheaderDto) {
    return await this.orderHeaderRepository.update(id,updateOrderheaderDto);
  }

   async remove(id: number) {
    return await this.orderHeaderRepository.softDelete({id});
  }
}
