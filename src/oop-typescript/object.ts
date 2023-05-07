// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound() {
//     console.log(`The ${this.name} sound like ${this.sound}`);
//   }
// }

// organized
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(`The ${this.name} sound like ${this.sound}`);
  }
}
// make instance
const dog = new Animal("German Shephard", "dog", "ghew ghew");
dog.makeSound();
const cat = new Animal("Deshi Billi", "cat", "mew mew");
cat.makeSound();
cat.name = "Special cat";
cat.makeSound()
