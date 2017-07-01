export class NewUser {
    constructor(
        public firstName : string,
        public lastName : string,
        public email : string,
        public age : number
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
}