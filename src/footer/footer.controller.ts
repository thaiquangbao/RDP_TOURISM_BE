import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { FooterService } from "./footer.service";
import { FooterDTO, IconsDTO } from "../dto/Home/Footer.dto";

@Controller("footer")
export class FooterController {
  constructor(private footerService: FooterService) {}
  @Post("insert")
  async create(@Body() footerDto: FooterDTO) {
    const result = await this.footerService.insert(footerDto);
    return result;
  }
  @Post("update/:id/:idc")
  async update(
    @Param("id") id: string,
    @Param("idc") idc: string,
    iconsDTO: IconsDTO,
  ) {
    const result = await this.footerService.updateIcons(id, idc);
    console.log("controller:", result);
    return result;
  }
}
