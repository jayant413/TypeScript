interface User {
    readonly _id : number,
    email : string,
    userId : number,
    googleId? : string,
    // startTrail : () => string
    startTrail () : string ,
    getCoupon (couponname: string , value : number) : number
}

// reopening of interface
interface User {
    githubToken : string
}


interface Admin extends User {
    role : "admin" | "ta" | "learner"
}


const Jayant : Admin = {
    _id : 2443,
    email :"j@s.com",
    userId : 234, 
    role : "admin",
    githubToken: "github.com/jayant413" ,
    startTrail : () => {
        return "trail started"
    },
    getCoupon : (name : "jayant" , off : 10)=>{
        return off
    }
}


export {}