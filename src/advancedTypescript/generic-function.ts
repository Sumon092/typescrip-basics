// arrow function

const createArray1 = (param: string): string[] => {
    return [param]
}
const createArray = <T>(param: T): T[] => {
    return [param]
}

const result1 = createArray<string>("Bangladesh");
const result2 = createArray<boolean>(false);

type Name = { name: string; }
const result3 = createArray<Name>({ name: 'Bangladesh' })


//tuple
const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2]
}
const result4 = createArray2<string, string>("I love", "Bangladesh");
const result5 = createArray2<boolean, Array<string>>(false, ["USA"]);

// spread operator

const crush = "Kate Winslet"
const myInfo = {
    name: 'Sumon',
    age: 32,
    salary: 100000,
}
// const newData = { ...myInfo, crush }

const addMeInMyCrushMind = <T>(myInfo: T) => {
    const crush = "kate winslet";
    const newData = { ...myInfo, crush }
    return newData
    // typescript define type before compile so, during this time we can use generic to infer type. 
}
const result6 = addMeInMyCrushMind(myInfo);

