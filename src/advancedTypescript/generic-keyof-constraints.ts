type PersonType = {
    name: string;
    age: number,
    salary: number;
}

type newTypeWithoutKeyof = "name" | "age" | "salary";
// const a:newTypeWithoutKeyof=""
type newTypeWithKeyof = keyof PersonType;
// const b:newTypeWithKeyof=""

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key];
};

// Y=name|age 
const property = getProperty({ name: "Mr X", age: 100 }, "age")
