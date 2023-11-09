// Pet data transfer object eli millaiset infot annetaan kun luodaan Pet, id puuttuu koska se annetaan automaattisesti luonnin yhteydessä

import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreatePetDto {
  @ApiProperty({ example: 'Pluto', description: 'Name of the pet' })
  @IsString()
  name: string;
  @ApiProperty({
    example: 'Yellow friendly dog',
    description: 'short description of pet',
  })
  @IsString()
  @Length(10, 200)
  description: string;
  @ApiProperty({ example: '1950-2-22' })
  @IsString()
  dateOfBirth: string;
}

// PartialType luo CreatePetDto:sta uuden version, jossa kaikki on valinnaisia
export class UpdatePetDto extends PartialType(CreatePetDto) {}
