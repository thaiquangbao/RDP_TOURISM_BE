import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: true,
})
export class Memory {
  @Prop({ type: String, require: true })
  img: string;
}
export const MemorySchema = SchemaFactory.createForClass(Memory);
