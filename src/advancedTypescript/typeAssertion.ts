let emni: any;
emni = "Next Level Web Development";
(emni as string).length;

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The converted result is ${value}`
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
const resultToBeNumber = kgToGram(1000) as number;
// const resultToBeString = kgToGram('1000') as string;
const resultToBeString = <string>kgToGram('1000');

type CustomErrorType = {
    message: string;
}
try {

} catch (error) {
    console.log((error as CustomErrorType).message);
}