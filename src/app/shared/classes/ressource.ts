export class Ressource {
    id?: number;
    title: string;
    typeId: number;
    createdAt: string;
    img: string; 
    cont: string;
    userId: number;

    constructor(input?){
        Object.assign(input);
    }
}
