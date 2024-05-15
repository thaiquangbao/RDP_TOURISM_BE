import { Module } from "@nestjs/common";
import { HeaderService } from "./header.service";
import { HeaderController } from "./header.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { HeaderSchema } from "../schema/Header.schema";
import { MemoryService } from "../memory/memory.service";
import { MemoryModule } from "../memory/memory.module";
import { MemorySchema } from "../schema/Memory.schema";
import { FooterService } from "../footer/footer.service";
import { FooterController } from "../footer/footer.controller";
import { FooterModule } from "../footer/footer.module";
import { FooterSchema } from "../schema/Footer.schema";
import { IconsSchema } from "../schema/IconsLinked.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Header",
        schema: HeaderSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: "Memory",
        schema: MemorySchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: "Footer",
        schema: FooterSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: "Icons",
        schema: IconsSchema,
      },
    ]),
    MemoryModule,
    FooterModule,
  ],
  providers: [HeaderService, MemoryService, FooterService],
  controllers: [HeaderController, FooterController],
})
export class HeaderModule {}
