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
   
    const ulprodutos = document.createElement("ul")

    const ulcarrinho = document.createElement("ul")
       ulprodutos.id = "produtos"
        ulcarrinho.id = "carrinho"
    
        main.append(h2, ulprodutos,ulcarrinho)
     body.append(main) 
}
criarMain()

function criarprodutos () {
       const ul = document.querySelector('#produtos')
    
       produtos.forEach((produto) => {
        const li = document.createElement('li')
        
        const h3 = document.createElement('h3')
        h3.innerText = produto.nome
        
        const p = document.createElement('p')
        p.innerText = produto.preco
        
        const img = document.createElement('img')
        img.src = produto.imagem
        
        const button = document.createElement('button')
        button.innerText = "Adicionar ao Carrinho"
        button.addEventListener('click', () => {
         
            adicionarCarrinho(produto)
        })
    
    
        li.append(h3, p, img, button)
        ul.append(li)
    
    }) 
}
criarprodutos()

function adicionarCarrinho (produto) {
    const carrinho = document.querySelector('#carrinho')
    const img = document.createElement("img")
    img.src = produto.imagem
   
    const preco = document.createElement('preco')
    preco.innerText = produto.preco

    const h4 = document.createElement('h4')
    h4.innerText = produto.nome
    
    const pSoma = document.createElement ('pSoma')
        




    carrinho.append(img, preco, h4, total)


   
    console.log(produto)

   
 
}    
