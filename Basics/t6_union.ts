let score : number | string | boolean = 33

score = "Union in TypeScript"


type User = {
    name : string;
    id : number
}

type Admin = {
    username : string ;
    id : number
}


let Jayant : User | Admin = {name : "Jayant" , id : 413}

Jayant = {username : "js" , id:143}


function getDbId(id : number | string){
    console.log(`DB id is : ${id}`);

    if(typeof id === "string"){
        id = id.toUpperCase()
        console.log(id)
    }
    if(typeof id === "number"){
        id += 2
        console.log(id)
    }
}


getDbId(3)
getDbId("db id")


const data : ( number | string )[] = [1,2,4 , "kdjsl"]
const data2 : any[] = [1,2,4 , "kdjsl"]


let pi:3.14 = 3.14;
console.log(pi)

let seatAllotment : "aisle" | "middle" | "window"


// Not Allowed
// seatAllotment = "crew";     

export{}