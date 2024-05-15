import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { MemoryDTO } from "../dto/Home/Memory.dto";
import { Memory } from "../schema/Memory.schema";

@Injectable()
export class MemoryService {
  constructor(@InjectModel(Memory.name) private memoryModel: Model<Memory>) {}
  async createMemory(memoryDTO: MemoryDTO) {
    const result = await new this.memoryModel(memoryDTO).save();
    return result;
  }
  async viewMemory(): Promise<MemoryDTO[]> {
    const result = await this.memoryModel.find();
    return result;
  }
}
