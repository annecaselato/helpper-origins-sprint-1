var tableList = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
//This function generates a table from a given array
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
//This function deletes a item from the table given an ID
function deleteItem() {
    //Get the ID from the form input and clear the field after
    var givenId = Number(document.getElementById("fDeleteId").value);
    document.getElementById("edit-form").reset();
    //Check if the ID is valid
    var index = tableList.findIndex(function (obj) { return obj.id === givenId; });
    if (index === -1) {
        alert("ID inválida!");
        return;
    }
    //Delete the item from the list and make a new table
    document.querySelector('#tb').innerHTML = "";
    tableList = tableList.filter(function (obj) { return obj.id !== givenId; });
    makeTable(tableList);
}
//This function edit a item from the list given an ID and the new values
function updateItem() {
    //Get information from the form and clear the fields after
    var givenId = Number(document.getElementById("fChangeId").value);
    var newName = document.getElementById("fChangeName").value;
    var newBio = document.getElementById("fChangeBio").value;
    document.getElementById("edit-form").reset();
    //Check if the ID is valid
    var index = tableList.findIndex(function (obj) { return obj.id === givenId; });
    if (index === -1) {
        alert("ID inválida!");
        return;
    }
    //Erase the old table
    document.querySelector('#tb').innerHTML = "";
    //Update the name if a new one was given
    if (newName)
        tableList[index].name = newName;
    //Update the biography if a new one was given
    if (newBio)
        tableList[index].bio = newBio;
    //Make a new table
    makeTable(tableList);
}
window.onload = function () {
    makeTable(tableList);
    document.getElementById("edit-form").reset();
};
