import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {

  constructor(
    @InjectRepository(Customer)
    private customerRepository:Repository<Customer>
  ) {}
  
  create(createCustomerDto: CreateCustomerDto) {
    const newCustomer = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(newCustomer); 
  }

  findAll():Promise<Customer[]> {
    return this.customerRepository.find();
  }

  findBy(id: number) {
    return this.customerRepository.findBy({id})
  }

 async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return await this.customerRepository.update(id, updateCustomerDto);
  }

  async remove(id: number) {
    return  await this.customerRepository.softDelete({id});
  }
}
