export type Ability = {
    id: number;
    name: string;
    rank: number;
}

export type Character = {
    name: string;
    abilities: Ability[];
}