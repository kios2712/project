import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  pass: string;

  @Column()
  phone: string;

  @Column({ default: true })
  isActive: boolean;
  
  @DeleteDateColumn({ name: 'deletedAt', type: 'timestamp', nullable: true })
  deletedAt: Date;
}