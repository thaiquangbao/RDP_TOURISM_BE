import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Icons } from "./IconsLinked.schema";

@Schema({
  timestamps: true,
})
export class Footer {
  @Prop({ type: String, require: true, unique: true })
  nameCompany: string;
  @Prop({ type: String, require: true })
  moTa: string;
  @Prop({ type: Array, ref: "Icons", required: true })
  icons: Icons;
}
export const FooterSchema = SchemaFactory.createForClass(Footer);
