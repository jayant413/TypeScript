function addTwo(num : number) : number{
    return num + 2
}

function getUpper(val : string){
    return val.toUpperCase()
}

function signUpUser (name:string , email:string , age : number , isPaid : boolean = false){}


addTwo(5)
signUpUser("Jayant" , "jay4103@gmail.com" , 20 , true)
console.log(getUpper("Jayant"))


// function getValue (myVal : number) : boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }


const getHello = (s : string  ) : string =>{
    return "200 OK"
}


const heros = ["thor" , "spiderman" , "ironman"]

heros.map((hero : string) : string=>{
    return `hero is ${hero}`
})


function consoleError(errmsg : string) : void{
    console.log(errmsg);
}
function handleError(errmsg : string) : never{
    throw new Error(errmsg)
}




export {}