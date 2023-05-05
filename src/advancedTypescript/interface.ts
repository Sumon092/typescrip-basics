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
}