// normal function 
function add(number: number, number2: number): number {
    return number + number2
}
const result = add(2, 5);
console.log(result);
// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [12, 4, 6, 3]
const newArr = arr.map((elem: number) => elem * elem)

const person: {
    name: string,
    balance: number,
    addBalance(money: number): void;
    // if no specific return type ,return type will be void.
} = {
    name: 'Sumon',
    balance: 5,
    addBalance(money: number) {
        console.log(`My new balance is ${this.balance + money}`);
    }
}

// spread operator 
const myFriend = ['chandler', 'joey', 'ross'];
const myNewFriend = ['monica', 'rachel', 'pheobe'];
myFriend.push(...myNewFriend);
console.log(myFriend);
// rest operator element gulo k niye ekta array make kore. spread operator er opposite.

//destructure er somoi type bole deya jabe na.