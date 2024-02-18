import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: true,
})
export class Header {
  @Prop({ type: String, require: true, unique: true })
  titleOne: string;
  @Prop({ type: String, require: true, unique: true })
  titleTwo: string;
  @Prop({ type: String, require: true })
  video: string;
}
export const HeaderSchema = SchemaFactory.createForClass(Header);
