import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from './entities/pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';

// Controller hoitaa endpointit ja logiikka hoituu servicen kautta

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}
  @Post()
  // kaivaa bodyn muuttujat koska määritelty CreatePetDto
  createPet(@Body() createPetDto: CreatePetDto): Pet {
    console.log(`Creating a pet ${JSON.stringify(createPetDto)}`);
    return this.petsService.insertPet(createPetDto);
  }
  @Get()
  getPets(): Pet[] {
    return this.petsService.getPets();
  }
  @Get(':id')
  getAPet(@Param('id') petId: string): Pet {
    return this.petsService.getOnePet(petId);
  }

  @Patch(':id')
  updatePet(
    @Param('id') petId: string,
    @Body() createPetDto: CreatePetDto,
  ): Pet {
    return this.petsService.updateOnePet(petId, createPetDto);
  }
}
