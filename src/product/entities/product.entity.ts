import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @DeleteDateColumn({ name: 'deletedAt', type: 'timestamp', nullable: true })
  deletedAt: Date;
    orderDetails: any;
}