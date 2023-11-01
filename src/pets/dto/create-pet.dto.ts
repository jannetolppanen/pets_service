// Pet data transfer object eli millaiset infot annetaan kun luodaan Pet, id puuttuu koska se annetaan automaattisesti luonnin yhteydessä

export class CreatePetDto {
  name: string;
  description: string;
  dateOfBirth: string;
}
