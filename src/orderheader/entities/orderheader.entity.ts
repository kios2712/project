import { Customer } from 'src/customer/entities/customer.entity';
import { Orderdetail } from 'src/orderdetail/entities/orderdetail.entity';
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Orderheader {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    date:Date;

    @ManyToOne(() => Customer, customer => customer.orderheader)
    customer: Customer;

    
    @OneToOne(type => Orderdetail)
    @JoinColumn()
    orderDetail: Orderdetail;

  
}
