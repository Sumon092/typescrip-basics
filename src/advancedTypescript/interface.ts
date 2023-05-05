type User = {
    name: string;
    age: number;
};

type extendedUser = User & {
    role: string
}

const userWithTypeAlias: User = {
    name: "typeAlias",
    age: 100
};

interface IUser {
    name: string;
    age: number;
};

const userWithInterface: IUser = {
    name: 'interface',
    age: 200,
};
interface IExtendedUser extends IUser {
    role: string
}

const user2: IExtendedUser = {
    name: 'Omanush',
    age: 200,
    role: "unknown"
};
// type alias with function
type addNumberType = (num1: number, num2: number) => number;
const addNumber: addNumberType = (num1, num2) => num1 + num2;

// interface with function 
interface IAddNumber {
    (num1: number, num2: number): number;
}

// interface with array 
interface IRollNumbers {
    [index: number]: string;
};
const rollNumbers: IRollNumbers = ['4', '2,', "1"];

// type alias with array 
type rollNumberType = number[];
const rollNumber: rollNumberType = [1, 2, 3]