// Määritellään Pet luokka ja sen konstruktori

export class Pet {
  petId: string;
  name: string;
  description: string;
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
