import { Injectable } from '@nestjs/common';
import { CreateOrderdetailDto } from './dto/create-orderdetail.dto';
import { UpdateOrderdetailDto } from './dto/update-orderdetail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Orderdetail } from './entities/orderdetail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderdetailService {
  constructor(
    @InjectRepository(Orderdetail)
    private orderdetailRepository:Repository<Orderdetail>
  ){}
  create(createOrderdetailDto: CreateOrderdetailDto) {
    const newOderDetail =  this.orderdetailRepository.create(createOrderdetailDto);

    return this.orderdetailRepository.save(newOderDetail);
  }

  findAll():Promise<Orderdetail[]> {
    return this.orderdetailRepository.find();
  }

  findOne(id: number) {
    
    return this.orderdetailRepository.findBy({id});
  }

 async update(id: number, updateOrderdetailDto: UpdateOrderdetailDto) {
    return await this.orderdetailRepository.update(id,updateOrderdetailDto); 
    
  }

  async remove(id: number) {
    return  await this.orderdetailRepository.softDelete({id});
  }
}
