import { Controller, Get,Post, Body } from '@nestjs/common';
import { AutosService } from './autos.service'


@Controller('autos')
export class AutosController {
    constructor(private readonly autosService:AutosService){}
    @Get()
    findAll() {
        return this.autosService.findAll();
    }

    @Post()
    createAutos(@Body()body){
        return this.autosService.create(body);
    }
}
