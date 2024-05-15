import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { HeaderService } from "./header.service";
import { Response } from "express";
import { HeaderDTO } from "../dto/Home/Header.dto";
import { MemoryService } from "../memory/memory.service";
@Controller("home")
export class HeaderController {
  constructor(
    private headerService: HeaderService,
    private memoryService: MemoryService,
  ) {}
  @Post("insert")
  async insert(@Body() header: HeaderDTO) {
    const result = await this.headerService.createHeader(header);
    return result;
  }
  @Get()
  async headerView(@Res() res: Response) {
    const headers = await this.headerService.viewHeader();
    const memories = await this.memoryService.viewMemory();
    return res.render("Home/listhome", { headers, memories });
  }
}
