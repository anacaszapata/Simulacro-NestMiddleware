import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({collection:'autos'})
export class Autos extends Document{
    @Prop()
    marca:string;
    @Prop()
    modelo:number;
}
export const AutosSchema = SchemaFactory.createForClass(Autos);