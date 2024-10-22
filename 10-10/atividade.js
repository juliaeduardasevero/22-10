let carro = {


    marca:"BMW",
    modelo: "m8 competition",
    cor: "roxo", 
    andar: function () {
        console.log(`A ${carro.marca} ${carro.modelo} estaandando`)
    },
    buzina: function (){
        console.log(`a ${carro.marca} ${carro.modelo} esta buzinando`)

    }
}

carro.andar()
carro.buzinar()

carro.marca = "porsche"
carro.modelo = "GT3 RS"