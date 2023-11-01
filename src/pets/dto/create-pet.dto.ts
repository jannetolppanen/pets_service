// Pet data transfer object eli millaiset infot annetaan kun luodaan Pet, id puuttuu koska se annetaan automaattisesti luonnin yhteydessä

import { ApiProperty } from '@nestjs/swagger';

export class CreatePetDto {
  @ApiProperty({ example: 'Pluto', description: 'Name of the pet' })
  name: string;
  @ApiProperty({
    example: 'Yellow friendly dog',
    description: 'short description of pet',
  })
  description: string;
  @ApiProperty({ example: '1950-2-22' })
  dateOfBirth: string;
}
