class CUser {
    public email: string
    public name: string
    public city: string = ""
    private secret: string = "secret"
    #privateVariableAlt: string = "secret2"
    readonly _role: string = "user"

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const UserBen = new CUser("ben@gmail.com", "ben");
UserBen.city = "New York"


// Alternative way
class CAdmin {
    private readonly _secret = "secret";
    email: string;
    userId: string;

    constructor(email: string, userId: string) {
        this.email = email;
        this.userId = userId;
    }

    get getEmail(): string {
        return this.email;
    }

    set setEmail(email: string) {
        this.email = email;
    }
}