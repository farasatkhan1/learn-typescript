interface IUser {
    readonly _id: number,
    email: string,
    password: string,
    googleId?: string,
    startTrial: () => string,
    endTrial(): string, // alternative way
    getCoupon(coupon: string): string
}

// reopening of interfaces
interface IUser {
    githubId: string,
}

interface IAdmin extends IUser {
    role: "admin" | "administrator"
}

interface ISuperAdmin extends IUser, IAdmin {
    role: "administrator"
}

const benUser: IUser = {
    _id: 1, 
    email: "ben@gmail.com", 
    password: "password",
    startTrial: () => {
        return "trial started"
    },
    endTrial: () => {
        return "trial ended"
    },
    getCoupon: (coupon) => {
        return coupon;
    },
    githubId: "github"
}