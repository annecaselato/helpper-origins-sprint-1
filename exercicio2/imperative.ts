let impList: Array<any> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

//Função que retorna a bio do id passado
function getBioImp(givenId: number) {
    let bio: any = undefined;
    for (let i = 0; i < impList.length; i++) {
        if (impList[i].id === givenId) {
            bio = impList[i].bio;
        }
    }
    return bio;
}

//Função que retorna o name do id passado
function getNameImp(givenId: number) {
    let name:any = undefined;
    for (let i = 0; i < impList.length; i++) {
        if (impList[i].id === givenId) {
            name = impList[i].name;
        }
    }
    return name;
}

//Função que apaga o item do id passado
function deleteItemImp(givenId: number) {
    if (givenId >= impList.length) {
        return;
    }
    let newList: Array<any> = impList;
    for (let i = 0; i < impList.length; i++) {
        if (impList[i].id === givenId) {
            newList.splice(i, 1);
        }
    }
    return newList;
}

//Função que permite alterar o name ou a bio do id passado
function updateItemImp(givenId: number, newName: string, newBio: string) {
    if (givenId >= impList.length) {
        return;
    }
    let newList: Array<any> = impList;
    for (let i = 0; i < impList.length; i++) {
        if (impList[i].id === givenId) {
            newList[i].name = newName;
            newList[i].bio = newBio;
        }
    }
    return newList;
}