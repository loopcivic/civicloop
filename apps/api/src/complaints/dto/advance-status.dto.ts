import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { Status } from '@prisma/client';

export class AdvanceStatusDto {
  @IsEnum(Status)
  nextStatus!: Status;

  @IsOptional()
  @IsString()
  @MaxLength(800)
  note?: string;
}
