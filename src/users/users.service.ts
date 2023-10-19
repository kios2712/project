import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    // Genera un UUID único
    const uuid = uuidv4();

    // Construye el ID en el formato "USR+UUID"
    const userId = `USR${uuid}`;

    // Asigna el ID formateado al DTO de creación de usuario
    createUserDto.id = userId;

    // Crea el usuario
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  findAll():Promise<User[]> {
    
    return this.usersRepository.find();
  }

  findBy(id: string) {
    return this.usersRepository.findBy({id});
  }



  async update(id:string, updateUserDto : UpdateUserDto){
    return await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    return await this.usersRepository.softDelete({id});
  }
}
