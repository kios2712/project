import { Orderheader } from "src/orderheader/entities/orderheader.entity";
import { product } from "src/product/entities/product.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Orderdetail {
    @PrimaryGeneratedColumn()
    id:number;

   

    @ManyToOne(type => product, product => product)
    product: product;

    @Column()
    descuento:number;

    @Column()
    totalnet:number;

    @Column()
    operationnumber:string;

    @Column()
    payment:number;
    
    @Column()
    paymentmethod:number;

    @Column()
    payone:number;
    
    @Column()
    paytwo:number;

    @OneToOne(type => Orderheader, orderHeader => orderHeader.orderDetail)
    orderHeader: Orderheader;

   

}
