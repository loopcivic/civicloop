import { IsNumber, IsOptional, IsString, MaxLength, IsUrl } from 'class-validator';

export class ResolveComplaintDto {
  @IsNumber()
  lat!: number;

  @IsNumber()
  lng!: number;

  // base64 image string from client
  @IsString()
  mediaBase64!: string;

  @IsString()
  @IsUrl()
  photoUrl: string;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  note?: string;

  // optional file ext hint: "jpg" | "png"
  @IsOptional()
  @IsString()
  ext?: string;
}


// import { IsNumber, IsString, IsUrl } from 'class-validator';

// export class ResolveComplaintDto {
//   @IsNumber()
//   lat: number;

//   @IsNumber()
//   lng: number;

//   @IsString()
//   @IsUrl()
//   photoUrl: string;
// }