import { IsNotEmpty, IsUrl } from "class-validator";

export class MemoryDTO {
  id?: string;
  @IsNotEmpty()
  @IsUrl()
  img: string;
}
