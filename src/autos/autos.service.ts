import { Body, Injectable } from '@nestjs/common';
import { Autos } from './student.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AutosService {
    constructor(
        @InjectModel(Autos.name) private autosModel: Model<Autos>,
    ){}
    
    findAll(){
        return this.autosModel.find()
    }

    async create(@Body()body):Promise<Autos>{
        const autosData = {
            marca:body.marca,
            modelo:body.modelo
        };
        const autos = new this.autosModel(autosData);
        return await autos.save();
    }
}
