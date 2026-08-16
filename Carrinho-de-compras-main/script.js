import {produtos} from './data.js'

console.log(produtos)

const body = document.querySelector('body')

function criarHeader () {  
    const header = document.createElement('header')
    const h1 = document.createElement ('h1')
      
    h1.innerText = 'KABUUM'
    header.append(h1)
     body.append (header)
}

criarHeader()

function criarMain () {

    const main = document.createElement('main')
    const h2 = document.createElement('h2')
    h2.innerText= "itens na loja"
    const ul = document.createElement("ul")
   
     main.append(h2, ul)
     body.append(main) 
}
criarMain()
const ul = document.querySelector('ul')