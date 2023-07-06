const User = {
    name : "Jayant",
    email : "jayantsawarkar4103@gmail.com",
    isActive : true
}

function createUser ({name : string , isActive: boolean }){}

let newUser = {name : User.name , isActive : User.isActive}

createUser(newUser)

function createCourse():{name : string , price : number}{
    return {name : "reactjs" , price : 400}
}



/***
 * //                  Type Aliases
 */


type Users = {
    name : string ;
    email : string ;
    isActive : boolean
}

function createUsers(user : Users): Users
{
    return {name : "" , email:" " , isActive : true}
}

createUsers({name : "" , email:" " , isActive : true})



type User = {
    readonly _id : string,
    name : string ,
    email : string , 
    isActive : boolean,
    cardDetali? : number
}

let myUser : User = {
    _id : "12344",
    name : "h",
    email : "h@h.com",
    isActive : false
}


myUser.email = "j@s.com"


type cardNumber = {
    cardnumber : number
}

type cardDate = {
    cardDate :string
}

type cardDetalis = cardNumber & cardDate & {
    cvv : number
}







export {}