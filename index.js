let botao = document.getElementById("btn")

const cores = ['red','blue','green','pink','yellow']

botao.addEventListener("click",function(){
    let corAtual = document.body.style.backgroundColor
    let novaCor
    do{
        novaCor = corAleatoria()
        console.log(`A cor atual é ${corAtual} e aleatória que acabou de ser gerada foi ${cores[novaCor]}`)
    }while(cores[novaCor]===corAtual)
    console.log(`A cor ${cores[novaCor]} foi admitida para ser a próxima cor`)

    document.body.style.background = cores[novaCor]
    document.querySelector(".color").innerHTML=cores[novaCor]
})
function corAleatoria(){
    return Math.floor(Math.random() * cores.length)
}