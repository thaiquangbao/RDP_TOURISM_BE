import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FooterSchema } from "src/schema/Footer.schema";
import { IconsSchema } from "src/schema/IconsLinked.schema";
import { FooterService } from "./footer.service";
import { FooterController } from "./footer.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Icons",
        schema: IconsSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: "Footer",
        schema: FooterSchema,
      },
    ]),
  ],
  providers: [FooterService],
  controllers: [FooterController],
})
export class FooterModule {}
