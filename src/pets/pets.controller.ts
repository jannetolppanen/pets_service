import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from './entities/pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';
import { ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

// Controller hoitaa endpointit ja logiikka hoituu servicen kautta

@Controller('pets')
@ApiTags('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new pet' })
  @ApiCreatedResponse({
    description: 'Pet has been succesfully created',
    type: Pet,
  })
  // kaivaa bodyn muuttujat koska määritelty CreatePetDto
  createPet(@Body() createPetDto: CreatePetDto): Pet {
    console.log(`Creating a pet ${JSON.stringify(createPetDto)}`);
    return this.petsService.insertPet(createPetDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all pets' })
  @ApiResponse({ status: 200, description: 'OK' })
  getPets(): Pet[] {
    return this.petsService.getPets();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one pets' })
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 404, description: 'Matching ID not found' })
  getAPet(@Param('id') petId: string): Pet {
    return this.petsService.getOnePet(petId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Pet updated' })
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 404, description: 'Matching ID not found' })
  updatePet(
    @Param('id') petId: string,
    @Body() createPetDto: CreatePetDto,
  ): Pet {
    return this.petsService.updateOnePet(petId, createPetDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a pet' })
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 404, description: 'Matching ID not found' })
  deletePet(@Param('id') petId: string): void {
    return this.petsService.deleteOnePet(petId);
  }
}
