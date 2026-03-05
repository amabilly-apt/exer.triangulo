const rl = require('readline-sync')

//importação das clases
const Prisma = require('./Prisma')

let opcao = 0 

console.log('|-----------------------|')
console.log('|-----Prisma------------|')
console.log('|-----Piramide----------|')
console.log('|-----------------------|')

opcao Number(rl.question(`qual a sua opção`))
console.log(opcao)

if(opcao === 1){
    console.log('Prisma')
}else if(opcao === 2){
    console.log('Piramide')
}

