export class User {
    lastname: string;
    firstname: string;
    password?: string;
    phonenumber?: string; 
    avatar?: string;
    role?: string;
    email?: string;
    birthdate?: string;
    createdAt?: string;
    isConfirmed?: string;


    constructor(input?){
        Object.assign(input)
    }

}
