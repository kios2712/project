import { Orderheader } from 'src/orderheader/entities/orderheader.entity';
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    phone:string;

    @Column()
    dni:string;
    
    @Column()
    ruc: string;

    @OneToOne(() => Orderheader, orderheader => orderheader.orderDetail)
    orderheader: Orderheader;

}
