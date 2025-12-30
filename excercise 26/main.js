


function blocking(){

   
   console.log("immedietly")
setTimeout(()=>{
    console.log("you are late 3 seconds")
},3000)
}

blocking()

console.log("i am coming before you")
