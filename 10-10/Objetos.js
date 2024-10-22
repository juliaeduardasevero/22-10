let pessoa ={
    nome:"julia",
    sobrenome:"severo",
    idade: 16,
    altura: 1.53,
    dormir:function(){
    console.log(`${pessoa.nome} esta dormindo. rooooooooc!`)
           
    }

}

{
console.log(pessoa)
console.log(pessoa.nome,pessoa.sobrenome)
console.log(pessoa["nome"],pessoa["sobrenome"])

pessoa.nome = "Matheus"
console.log(pessoa.nome)
pessoa.idade = 99
console.log(pessoa.idade)

pessoa.peso = 40
console.log(pessoa)

pessoa.dormir()

pessoa.comer = function () {
    console.log
}
}