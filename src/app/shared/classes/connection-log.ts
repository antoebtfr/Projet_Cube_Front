export class ConnectionLog {
    id?: number;
    ipAdress: string;
    dateConnection?: string; 

    constructor(input?){
        Object.assign(input);
    }
}
