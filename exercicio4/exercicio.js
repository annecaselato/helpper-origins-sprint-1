var tableList = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function makeTable(list) {
    var tableString = "<tr>";
    for (var column in list[0]) {
        tableString += "<th>" + column + "</th>";
    }
    tableString += "</tr>";
    list.forEach(function (element) {
        tableString += "<tr>";
        for (var prop in element) {
            tableString += "<td>" + element[prop] + "</td>";
        }
        tableString += "</tr>";
    });
    document.querySelector('#tb').innerHTML = tableString;
}
//makeTable(tableList);
function deleteItem() {
    var givenId = Number(document.getElementById("fDeleteId").value);
    document.querySelector('#tb').innerHTML = "";
    tableList = tableList.filter(function (obj) { return obj.id !== givenId; });
    makeTable(tableList);
}
function updateItem() {
    var givenId = Number(document.getElementById("fChangeId").value);
    var newName = document.getElementById("fChangeName").value;
    var newBio = document.getElementById("fChangeBio").value;
    document.querySelector('#tb').innerHTML = "";
    var index = tableList.findIndex(function (obj) { return obj.id === givenId; });
    tableList[index].name = newName;
    tableList[index].bio = newBio;
    makeTable(tableList);
}
