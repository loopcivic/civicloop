// import { IsEnum, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
// import { Type } from 'class-transformer';



// export enum Category {
//   ROAD = 'ROAD',
//   WATER = 'WATER',
//   GARBAGE = 'GARBAGE',
//   LIGHT = 'LIGHT',
//   SEWAGE = 'SEWAGE',
//   OTHER = 'OTHER',
// }

// export class CreateComplaintDto {
//   @IsString()
//   @MaxLength(120)
//   title!: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(1000)
//   description?: string;

//   @IsEnum(Category)
//   category!: Category;

//   @IsString()
//   wardId!: string;

//   @IsString()
//   departmentId!: string;

//   @Type(() => Number)
//   @IsNumber()
//   lat!: number;

//   @Type(() => Number)
//   @IsNumber()
//   lng!: number;


//   @IsOptional()
//   @IsString()
//   @MaxLength(240)
//   locationText?: string;

//   @IsOptional()
//   @IsString()
//   mediaBase64?: string;
// }


import { IsEnum, IsNumber, IsOptional, IsString, MaxLength, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export enum Category {
  ROAD = 'ROAD',
  WATER = 'WATER',
  GARBAGE = 'GARBAGE',
  LIGHT = 'LIGHT',
  SEWAGE = 'SEWAGE',
  OTHER = 'OTHER',
}

export class CreateComplaintDto {
  @IsString()
  @IsNotEmpty({ message: 'Title cannot be empty' })
  @MaxLength(120)
  title!: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string; // 👈 Removed the '?' to make it strictly required

  @IsEnum(Category)
  category!: Category;

  @IsString()
  @IsNotEmpty()
  wardId!: string;

  @IsString()
  @IsNotEmpty()
  departmentId!: string;

  @Type(() => Number)
  @IsNumber()
  lat!: number;

  @Type(() => Number)
  @IsNumber()
  lng!: number;

  @IsOptional()
  @IsString()
  @MaxLength(240)
  locationText?: string;

  @IsOptional()
  @IsString()
  mediaBase64?: string;
}