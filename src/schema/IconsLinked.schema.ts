import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: true,
})
export class Icons {
  @Prop({ type: String, require: true, unique: true })
  link: string;
  @Prop({ type: String, require: true })
  img: string;
  @Prop({ type: String })
  owner: string;
}
export const IconsSchema = SchemaFactory.createForClass(Icons);
