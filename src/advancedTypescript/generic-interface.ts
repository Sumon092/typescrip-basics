// Generic interface 
interface CrushInterface<T, U = null> {
    name: string,
    husband: T;
    wife?: U 
}
const crush1: CrushInterface<boolean, string> = {
    name: 'Kate Winslet',
    husband: true,
    wife: "Sokina"
};
const crush2: CrushInterface<string> = {
    name: 'Katty Perry',
    husband: "Persian"
}

//interface with object with multiple parameter in interface
interface HusbandInterface { name: string, salary: number }
const crush3: CrushInterface<HusbandInterface> = {
    name: "Leonerdo Dikaprio",
    husband: {
        name: "Leonardo",
        salary: 2000
    }
}


interface PersonInterface {
    name: string,
    age: number
}
const cursh4: CrushInterface<PersonInterface, PersonInterface> = {
    name: "Apu Biswas",
    husband: {
        name: "Sakib Khan",
        age: 40,
    },
    wife: {
        name: "Bubly",
        age: 32
    }
}