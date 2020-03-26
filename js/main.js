//PRIMEIRA AULA
//var nome = "Ana Andrei";
//var idade = 19;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
// nao precisa falar se e string ou int, se colocar + ele soma automaticamente
// porem se for string tem que colocar entre aspas duplas

//alert(nome + "tem" + idade + "anos");
//alert(idade + idade2);
//o alerte e aquele pagininha de erro q abre no site 

//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão","Brasil"));
// o console e onde mostra toda a estrutura, e o replace muda uma palavra

//console.log(frase.toUpperCase());
//toUpperCase deixa tudo em maiuscula

//console.log(frase.toLowerCase());
//toLowercase deixa tudo em minuscula




//SEGUNDA AULA ARRAY E DICIONARIO 

//var lista = ["maça","pêra","laranja"];

//lista.push("uva");
//push serve para adicionar elemento na lista

//lista.pop();
//pop serve para retirar elemento da lista

//console.log(lista)
//mostra tudos os elementos contidos na lista tratando-os como array

//console.log(lista[1])
//alert(lista[1])
//mostra apenas o elemento 1 tanto no console como no alert

//console.log(lista.length);
//mostra a quantidade de elementos que possui na lista

//console.log(lista.reverse());
//mostra os elementos da lista ao contrario 

//console.log(lista.toString())
//mostra os elementos como TEXTO

//console.log(lista.join(" - "))
//Tranforma os elementos em texto e ao inves da virgula, coloca o traço


//var fruta = {nome:"maça", cor:"vermelha"}

//console.log(fruta.nome);
//Mostra "maça"

//alert(fruta.cor);
//Mostra "Vermelha"

//var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);
//Mostra "uva" no alert e no console mostra o dicionario inteiro




//TERCEIRA AULA: CONDICIONAIS, LACOS DE REPETIÇÃO E DATE
//var idade = prompt("Qual sua idade?");
//Prompt faz usuario entrar com infomacao e como se fosse o printf mas n precisa de scanf

//if (idade >= 18){
//    alert("Maior de idade");
//}
//else{
//    alert("Menor de idade");
//}

//ESTRUTURA DE REPETICAO WHILE
//var count = 0;
//while (count <= 5){
//    console.log(count);
//    count++;
//}

//ESTRUTURA DE REPETICAO FOR
//var count;
//for(count=0; count<=5; count++){
//    alert(count);
//    console.log(count);
//}


//var d = new Date();
//alert(d);
//Mostra a data atual




//AULA 4 
//function soma (n1 , n2){
//    return n1+n2;
//}
//alert (soma (5, 10));


//var validar;
//function validaidade (idade){
//    validar;
//    if (idade >= 18){
//        validar = true
//    }
//    else{
//        validar = false
//    }
//    return(validar);
//}
//var idade = prompt ("Qual sua idade?");
//console.log = (validaidade (idade));



//AULA 5

function clicou(){
    alert("Obrigado por clicar!");
//    document.getElementById("Agradecimento").innerHTML = "<b> Obrigada por clicar </b>";
//    console.log(document.getElementById("Agradecimento"))
}
//Usando este codigo apareceu um botao na tela e quando clicado aparecia "Obrigada por clicar"


//Para redirecionar para outra página:
//OBS: Com o open abre em outra página e com o href abre na mesma
function redirecionar(){
    window.open("https://digitalinnovation.one/");
//    window.location.href = "https://digitalinnovation.one/";
}

//Quando passar o mouse em cima de algo:
function trocar(elemento){
//    document.getElementById("mousemove").innerHTML = "Obrigda por passar o mouse";
//    alert("Trocar texto");
//Mesmo comando de modo diferente:
elemento.innerHTML = "Obrigda por passar o mouse";
}

function voltar(elemento){
//    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
//Mesmo comando de modo diferente:
elemento.innerHTML = "Passe o mouse aqui";
}

//O function load quando terminar de carregar o body ele faz essa função
function load(){
    alert("Página carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
}




