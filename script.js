//alterando palavras 
let txt = "estão chegando as provas"
document.write(txt.replace("provas","avaliações"))
document.write("<br><br>")

// apresentando casas decimais 

let num=126.5225
document.write(num.toFixed(0))
document.write("<br><br>")

let num1 =126.5225
document.write(num1.toPrecision(4))

//caixa alert
//alert("ola mundo")
//let teste = confirm("voce é um aluno?")
//document.write("<br> <br> o resultado é: ", teste)

//caixa de prompt
let texto=prompt("digite seu nome: ")
document.write("<br><br>o seu nome é : ", texto)

//estrutura condicional- if

if(10 > 7){
document.write("<br>10 é maior que 7")
}else{
    document.write("<br>10 não é maior que 7")
}

let valor=10 
if(valor>7){
    document.write("<br>esse numero é maior que 7")
}else{
    document.write("<br>esse numero é menor que 7")
}

//if encadeado

let idade=18
if(idade<=12){
    document.write("<br>é uma criança")
}else if(idade<18){
    document.write("<br>é um adolescente")
}else{
    document.write("<br>é um adulto")
}

// && 'e'
let valor1=13
if(valor1>10 && valor1<20){
    document.write("<br>valor valido")
}else{
    document.write("<br>nao é valido")
}

// || 'ou'
let valor2 = 30
if(valor2>10 || valor2 <20){
    document.write("<br>valor valido")
}else{
    document.write("<br>valor invalido")
}