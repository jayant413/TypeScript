function addTwo(num : number){
    return num + 2
}

function getUpper(val : string){
    return val.toUpperCase()
}

function signUpUser (name:string , email:string , age : number , isPaid : boolean = false){}


addTwo(5)
signUpUser("Jayant" , "jay4103@gmail.com" , 20 , true)
console.log(getUpper("Jayant"))

export {}