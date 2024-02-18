import { Module } from "@nestjs/common";
import { HeaderService } from "./header.service";
import { HeaderController } from "./header.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { HeaderSchema } from "src/schema/Header.schema";
import { MemoryService } from "src/memory/memory.service";
import { MemoryModule } from "src/memory/memory.module";
import { MemorySchema } from "src/schema/Memory.schema";
import { FooterService } from "src/footer/footer.service";
import { FooterController } from "src/footer/footer.controller";
import { FooterModule } from "src/footer/footer.module";
import { FooterSchema } from "src/schema/Footer.schema";
import { IconsSchema } from "src/schema/IconsLinked.schema";

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
