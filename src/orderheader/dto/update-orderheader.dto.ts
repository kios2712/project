import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderheaderDto } from './create-orderheader.dto';

export class UpdateOrderheaderDto extends PartialType(CreateOrderheaderDto) {}
