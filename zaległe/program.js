const moves = ["U","U'","D","D'","L","L'","R","R'","F","F'","B","B'"]
console.log('Mix up your cube!')
let list = []
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Select number of moves you want:', nom => {
    for (let i = 0; i<nom;i++){
        let r = parseInt(Math.random()*12)
        list += moves[r] + ","
    }
    console.log(list);
    readline.close();
  });