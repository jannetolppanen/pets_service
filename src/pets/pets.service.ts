import { Injectable, NotFoundException } from '@nestjs/common';
import { Pet } from './entities/pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';
import { nanoid } from 'nanoid';

// Provider eli service, täällä on logiikka siihen mitä eri endpointeissa tapahtuu. Injectable tarkoittaa että tämä petservice voidaan ottaa käyttöön controllerissa.
@Injectable()
export class PetsService {
  pets: Pet[] = [
    {
      petId: '1',
      name: 'Pekko',
      description: 'Musta koiro',
      dateOfBirth: '1986-09-01',
    },
    {
      petId: '2',
      name: 'Tino',
      description: 'Keltainen jänes',
      dateOfBirth: '1991-12-24',
    },
  ];
  insertPet(createPetDto: CreatePetDto): Pet {
    const id = nanoid();
    const pet = new Pet(
      id,
      createPetDto.name,
      createPetDto.description,
      createPetDto.dateOfBirth,
    );
    this.pets.push(pet);
    console.log(`added a pet ${JSON.stringify(pet)}`);
    return pet;
  }
  getPets(): Pet[] {
    // palautetaan kopio, eikä koskaan suoraa pääsyä this.pets muuttujaan
    return [...this.pets];
  }
  getOnePet(petId: string): Pet {
    // findIndex palauttaa petin indeksin arraysta paitsi jos ei löydy niin palauttaa -1
    const index = this.pets.findIndex((item) => item.petId === petId);

    if (index >= 0) {
      const pet = this.pets[index];
      return { ...pet };
    }
    throw new NotFoundException('Could not find matching id');
  }
  updateOnePet(petId: string, createPetDto: CreatePetDto): Pet {
    const index = this.pets.findIndex((item) => item.petId === petId);

    if (index >= 0) {
      const pet = this.pets[index];
      const updatedPet = { ...pet };

      // Tsekataan erikseen kaikki arvot ja muutetaan vain ne jotka on syötetty
      if (createPetDto.name) {
        updatedPet.name = createPetDto.name;
      }
      if (createPetDto.description) {
        updatedPet.description = createPetDto.description;
      }
      if (createPetDto.dateOfBirth) {
        updatedPet.dateOfBirth = createPetDto.dateOfBirth;
      }
      // Muokataan pets arrayhin päivitetty Pet ja palautetaan päivitetty Pet
      this.pets[index] = updatedPet;
      return { ...updatedPet };
    }
    throw new NotFoundException('Could not find matching id');
  }
}