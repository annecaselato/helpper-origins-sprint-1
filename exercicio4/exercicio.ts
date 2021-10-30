let tableList: Array<any> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

function makeTable(list: Array<any>) {
    let tableString = "<tr>"
    for (let column in list[0]) {
      tableString += `<th>${column}</th>`
    }
    tableString += "</tr>"
    list.forEach(element => {
        tableString+="<tr>"
        for(let prop in element) {
          tableString += `<td>${element[prop]}</td>`
        }
        tableString += "</tr>"
    });
    document.querySelector('#tb')!.innerHTML = tableString;
}

function deleteItem() {
    let givenId: number = Number((<HTMLInputElement>document.getElementById("fDeleteId")).value);
    document.querySelector('#tb')!.innerHTML = "";
    tableList = tableList.filter(obj => obj.id !== givenId);
    makeTable(tableList);
}

function updateItem() {
    let givenId: number = Number((<HTMLInputElement>document.getElementById("fChangeId")).value);
    let newName: string = (<HTMLInputElement>document.getElementById("fChangeName")).value;
    let newBio: string = (<HTMLInputElement>document.getElementById("fChangeBio")).value;
    document.querySelector('#tb')!.innerHTML = "";
    let index: number = tableList.findIndex(obj => obj.id === givenId);
    tableList[index].name = newName;
    tableList[index].bio = newBio;
    makeTable(tableList);
}

