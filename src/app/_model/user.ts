import { Authority } from "./authority";
import { Role } from "./role";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    avatar: string;
    address: string;
    createdDate: Date;
    updatedDate: Date;
    status: boolean;
    isNotLoked: boolean;
    roles: Role[];
    rolesToDisplay: string;
    rolesInput: string[];
    authorities: Authority[];
    authoritiesToDisplay: string[];


    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.email = '';
        this.avatar = "";
        this.address = "";
        this.status = false;
        this.isNotLoked = false;
        this.roles = [];
    }
}
