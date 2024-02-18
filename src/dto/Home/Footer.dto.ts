import { Type } from "class-transformer";
import {
  ArrayMaxSize,
  IsArray,
  IsNotEmpty,
  IsString,
  IsUppercase,
  IsUrl,
  ValidateNested,
} from "class-validator";

export class IconsDTO {
  id: string;
  @IsNotEmpty()
  @IsUrl()
  link: string;
  @IsNotEmpty()
  @IsString()
  img: string;
  @IsString()
  owner: string;
}

export class FooterDTO {
  id: string;
  @IsNotEmpty()
  @IsString()
  @IsUppercase()
  nameCompany: string;
  @IsNotEmpty()
  @IsString()
  moTa: string;
  @IsArray()
  @ArrayMaxSize(3, { message: "The icons array must have exactly 3 objects." })
  @ValidateNested({ each: true })
  @Type(() => IconsDTO)
  icons: IconsDTO[];
}
