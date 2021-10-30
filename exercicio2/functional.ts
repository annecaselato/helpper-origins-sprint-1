let list: Array<any> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

//Função que retorna a bio do id passado
function getBioFnct(givenId: number) {
    let bio: string = list.find(obj => obj.id === givenId)?.bio;
    return bio;
}

//Função que retorna o name do id passado
function getNameFnct(givenId: number) {
    let name: string = list.find(obj => obj.id === givenId)?.name;
    return name;
}

//Função que apaga o item do id passado
function deleteItemFnct(givenId: number) {
    let newList: Array<any> = list.filter(obj => obj.id !==givenId);
    return newList;
}

//Função que permite alterar o name ou a bio do id passado
function updateItemFnct(givenId: number, newName: string, newBio: string) {
    let objIndex: number = list.findIndex((obj => obj.id == 1));
    let newList: Array<any> = list;
    newList[objIndex].name = newName;
    newList[objIndex].bio = newBio;
    return newList;
}