import { Body, Controller, Get, Post } from "@nestjs/common";
import { MemoryService } from "./memory.service";
import { MemoryDTO } from "src/dto/Home/Memory.dto";

@Controller("memory")
export class MemoryController {
  constructor(private memoryService: MemoryService) {}
  @Get()
  async viewMemory() {
    const result = await this.memoryService.viewMemory();
    return result;
  }
  @Post("insert")
  async insertMemory(@Body() memoryDTO: MemoryDTO) {
    const result = await this.memoryService.createMemory(memoryDTO);
    return result;
  }
}
