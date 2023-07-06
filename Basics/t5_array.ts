const superHero : string[] = [] 
// const heroPower : number[] = [] 
const heroPower : Array<number> = [] 

superHero.push("spiderman")
heroPower.push(28)



//  pushing values as a object

type User = {
    name : string ,
    isActive : boolean
}
const allUsers : User[] = []

allUsers.push({name : "Jayant" , isActive : true})
allUsers.push({name : "Roshan" , isActive : false })

console.log(allUsers)

// multidimensional array

const MLModels : number[][] = [
    [255 , 255 ,234],
    [34 , 43, 53]
]

console.log(MLModels)

export {}