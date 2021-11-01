interface Person {
    id: number;
    name: string;
    bio: string;
}

let people: Array<Person> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

//Função que retorna a bio do id passado
function getBioByImperative(givenId: number): string {
    let bio: string = '';
    for (let index = 0; index < people.length; index++) {
        if (people[index].id === givenId) {
            bio = people[index].bio;
        }
    }
    return bio;
}

//Função que retorna o name do id passado
function getNameByImperative(givenId: number): string {
    let name: string = '';
    for (let index = 0; index < people.length; index++) {
        if (people[index].id === givenId) {
            name = people[index].name;
        }
    }
    return name;
}

//Função que apaga o item do id passado
function deleteItemByImperative(givenId: number): Array<Person> {
    let outputList: Array<Person> = people;
    for (let index = 0; index < people.length; index++) {
        if (people[index].id === givenId) {
            outputList.splice(index, 1);
        }
    }
    return outputList;
}

//Função que permite alterar o name ou a bio do id passado
function updateItemByImperative(givenId: number, newName?: string, newBio?: string): Array<Person> {
    let outputList: Array<Person> = people;
    for (let index = 0; index < people.length; index++) {
        if (people[index].id === givenId) {
            if (newName) {
                outputList[index].name = newName;
            }
            if (newBio) {
                outputList[index].bio = newBio;
            }
        }
    }
    return outputList;
}