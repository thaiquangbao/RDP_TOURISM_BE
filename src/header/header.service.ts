import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { HeaderDTO } from "../dto/Home/Header.dto";
import { Header } from "../schema/Header.schema";

@Injectable()
export class HeaderService {
  constructor(@InjectModel(Header.name) private headerModel: Model<Header>) {}
  async createHeader(headerDTO: HeaderDTO) {
    const result = await new this.headerModel(headerDTO).save();
    return result;
  }
  async viewHeader(): Promise<HeaderDTO[]> {
    const result = await this.headerModel.find();
    return result;
  }
}
