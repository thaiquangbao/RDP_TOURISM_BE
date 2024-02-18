import { IsNotEmpty, IsString } from "class-validator";

export class HeaderDTO {
  id?: string;
  @IsNotEmpty()
  @IsString()
  titleOne: string;
  @IsNotEmpty()
  @IsString()
  titleTwo: string;
  @IsNotEmpty()
  @IsString()
  video: string;
}
