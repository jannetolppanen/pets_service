import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';

// Määritellään mitkä kontrollerit ja servicet sopivat yhteen
@Module({
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
