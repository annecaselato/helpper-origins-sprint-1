let list: Array<any> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

//Função que retorna a bio do id passado
function getBio(givenId: number) {
    let bio: string = list.find(i => i.id === givenId)?.bio;
    return bio;
}

//Função que retorna o name do id passado
function getName(givenId: number) {
    let name: string = list.find(i => i.id === givenId)?.name;
    return name;
}

//Função que apaga o item do id passado
function deleteItem(givenId: number) {
    let list2 = list.filter(i => i.id !==givenId);
    return list2;
}
//Função que permite alterar o name ou a bio do id passado

//
//let readline = require('readline-sync');
//let id = readline.question("Insira a id: ");
console.log("bio : " + getBio(5));
console.log("name: " + getName(2));
console.log(deleteItem(2));