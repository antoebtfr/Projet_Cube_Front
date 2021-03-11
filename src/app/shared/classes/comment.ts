export class Comment {
    text: string; 
    createdAt?: string;
    updatedAt?: string;

    constructor(input?){
        Object.assign(input);
    }
}
