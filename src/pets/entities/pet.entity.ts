import { ApiProperty } from '@nestjs/swagger';

// Määritellään Pet luokka ja sen konstruktori
// apiproperty on swaggerin luontia varten
export class Pet {
  @ApiProperty({ example: '12345', description: 'ID of the pet' })
  petId: string;
  @ApiProperty({ example: 'Pluto', description: 'Name of the pet' })
  name: string;
  @ApiProperty({
    example: 'Yellow friendly dog',
    description: 'short description of pet',
  })
  description: string;
  @ApiProperty({ example: '1950-2-22' })
  dateOfBirth: string;

  constructor(
    petId: string,
    name: string,
    description: string,
    dateOfBirth: string,
  ) {
    this.petId = petId;
    this.name = name;
    this.description = description;
    this.dateOfBirth = dateOfBirth;
  }
}
