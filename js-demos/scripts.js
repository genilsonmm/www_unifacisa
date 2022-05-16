//console.log("Funcionando!")

let num1 = 2
let num2 = 3

let soma = num1 + num2

//console.log(soma)

let eVerdadeiro = false
//console.log(eVerdadeiro)

if (eVerdadeiro) {
    //alert("É verdadeiro")
} else if(soma > 2) {
    //alert("É maior do que 2")
}
else {
    //alert("Não sei")
}

let valores = [20, 50, 5, 71]
//console.log(valores)
let ordenado = valores.sort((a, b) => b-a)
console.log(ordenado)

let fruit = ['cherries', 'apples', 'bananas'];
//console.log(fruit.sort());


//console.log(valores)

let maioresDoQue5 = valores.filter(numero => numero < 5)
//console.log(maioresDoQue5)

let usuario = {
    id: 1,
    nome: "Paulo Ricardo",
    contatos: [
        {
            tipo: "Telefone",
            valor: "(83) 87867565"
        },
        {
            tipo: "E-mail",
            valor: "paulo@gmail.com"
        }
    ],
    cpf: "988.984.393-90"    
}

//console.log(usuario)

for(let i=0; i < usuario.contatos.length; i++){
    //console.log(usuario.contatos[i].valor)
}

let contatoEncontrado = usuario.contatos.find(c => c.tipo === 'Telefone')
//console.log(contatoEncontrado)

let valor = (1 === "1")

//console.log(valor)

function exibir(){
    console.log("Sou uma função")
}

//exibir()

function somaDoisNumeros(num1, num2){
    return num1 + num2
}

let resultado = somaDoisNumeros(14, 2)
//console.log(resultado)

let minhaFuncao = function() {
    console.log("Sou uma função");
}

//minhaFuncao()

let minhaFuncao2 = () => {
    console.log("Sou uma função moderna")
}

//minhaFuncao2()

let mult = (num1, num2) => {
    return num1 * num2
}

//console.log(mult(2, 5))

function teste() {
    if(true){
        var global = "inicio"
        let interno = "inicio interno"

        //console.log(interno)
    }
    //console.log(interno)
    console.log(global)
}



teste()
