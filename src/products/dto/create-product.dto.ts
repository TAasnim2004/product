import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Clavier' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 80 })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ example: 12 })
  @IsNumber()
  @Min(0)
  stock: number;

  @ApiProperty({ example: 'Informatique' })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  isActive: boolean;
}
