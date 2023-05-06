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

const crush = "Kate Winslet";

type MyInfoType = {
    name: string,
    age: number,
    salary: number,
    other1: boolean,
    other2: null
}
const myInfo: MyInfoType = {
    name: 'Sumon',
    age: 32,
    salary: 100000,
    other1: false,
    other2: null
}
// const newData = { ...myInfo, crush }

// when we want specify some value to forcefully use we use generic constraint.
const addMeInMyCrushMind = <T extends { name: string, age: number, salary: number }>(myInfo: T) => {
    const crush = "kate winslet";
    const newData = { ...myInfo, crush }
    return newData
    // typescript define type before compile so, during this time we can use generic to infer type. 
}
const result6 = addMeInMyCrushMind(myInfo);


