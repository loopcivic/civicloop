import { IsEnum, IsOptional, IsString, MaxLength, IsNumber } from 'class-validator';

export enum Vote {
  CONFIRMED = 'CONFIRMED',
  NOT_FIXED = 'NOT_FIXED',
}

export class ValidateComplaintDto {
  @IsEnum(Vote)
  vote!: Vote;

  @IsOptional()
  @IsString()
  @MaxLength(400)
  note?: string;

  // for pilot testing: lets multiple "citizens" vote without real auth
  // e.g. "u1", "u2", "u3"
  @IsOptional()
  @IsString()
  voterKey?: string;

  @IsOptional()
  @IsString()
  mediaBase64?: string;

  @IsOptional()
  @IsString()
  ext?: string;

  @IsOptional()
  @IsNumber()
  lat?: number;

  @IsOptional()
  @IsNumber()
  lng?: number;
}
