import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HeaderModule } from "./header/header.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { MemoryModule } from "./memory/memory.module";
import { FooterModule } from './footer/footer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    HeaderModule,
    MemoryModule,
    FooterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
