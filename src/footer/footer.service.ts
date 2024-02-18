import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { FooterDTO, IconsDTO } from "src/dto/Home/Footer.dto";
import { Footer } from "src/schema/Footer.schema";
import { Icons } from "src/schema/IconsLinked.schema";
@Injectable()
export class FooterService {
  constructor(
    @InjectModel(Footer.name) private footerModel: Model<Footer>,
    @InjectModel(Icons.name) private iconsModel: Model<Icons>,
  ) {}
  async insert(footerDTO: FooterDTO) {
    const newIcons = await this.iconsModel.create(footerDTO.icons);
    // if (newFooter ) {
    // }
    const formData = {
      nameCompany: footerDTO.nameCompany,
      moTa: footerDTO.moTa,
      icons: newIcons,
    };
    const newFooter = await new this.footerModel(formData).save();
    console.log(newFooter);
    //console.log(newIcons);
    return newFooter;
  }
  async update(footerDTO: FooterDTO, id: string) {
    const formUpdate = {
      nameCompany: footerDTO.nameCompany,
      moTa: footerDTO.moTa,
    };
    const result = await this.footerModel.findByIdAndUpdate(id, formUpdate, {
      new: true,
      runValidators: true,
    });
    return result;
  }
  async updateIcons(id: string, idc: string) {
    const checkIcons = await this.iconsModel.findById(idc);
    if (checkIcons) {
      // const updateIcons = this.iconsModel.findByIdAndUpdate(idc, iconsDTO, {
      //   new: true,
      //   runValidators: true,
      // });
      const updateIconsOfFooter = this.footerModel.findOne({
        id: id,
        "icons.id": idc,
      });
      // { $set: { "icons.$": iconsDTO } },
      // {
      //   new: true,
      //   runValidators: true,
      // },

      // Promise.all([updateIcons, updateIconsOfFooter])
      //   .then(([icons, updated]) =>
      //     console.log("Cập nhật thành công", icons, updated),
      //   )
      //   .catch((err) => console.log(err));
      console.log(updateIconsOfFooter);
      return updateIconsOfFooter;
    } else {
      console.log("error");
    }
  }
}
