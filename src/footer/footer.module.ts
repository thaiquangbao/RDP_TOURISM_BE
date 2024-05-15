import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FooterSchema } from "../schema/Footer.schema";
import { IconsSchema } from "../schema/IconsLinked.schema";
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
