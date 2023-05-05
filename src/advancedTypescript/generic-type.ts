type GenericArray<T> = Array<T>

const rollNumber1: GenericArray<number> = [1, 2, 3]
const rollNumber2: GenericArray<string> = ["1", "2", "3"];
const rollNumber3: GenericArray<boolean> = [true, false];

type NameRollType = { name: string, roll: number }
const userNameAndRollNumber: GenericArray<NameRollType> = [{
    name: 'Badrul',
    roll: 23,
}, {
    name: 'Sadrul',
    roll: 32
}]

// tuple with generic type
type GenericTuple<x, y> = [x, y]
const relation: GenericTuple<string, string> = ["Persian", "Kate Winslet"]