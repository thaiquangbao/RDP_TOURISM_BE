import { Body, Controller, Get, Param, Post, Put, Res } from "@nestjs/common";
import { FooterService } from "./footer.service";
import { FooterDTO, IconsDTO } from "../dto/Home/Footer.dto";
import { Response } from "express";
@Controller("footer")
export class FooterController {
  constructor(private footerService: FooterService) { }
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
  @Get("manager-footer-form")
  async updateClient(@Res() res: Response) {
    return res.render("Page-Form/footer-form-add");
  }
}
