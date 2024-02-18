import { Module } from "@nestjs/common";
import { MemoryService } from "./memory.service";
import { MemoryController } from "./memory.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { MemorySchema } from "src/schema/Memory.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Memory",
        schema: MemorySchema,
      },
    ]),
  ],
  providers: [MemoryService],
  controllers: [MemoryController],
})
export class MemoryModule {}
