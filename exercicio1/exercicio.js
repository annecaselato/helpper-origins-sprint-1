var vowels = 'aeiou';
//Função que retorna a quantidade de vogais da palavra passada
function countVowels(word) {
    word = word.toLowerCase();
    var wordArray = word.split("");
    var vowelCount = wordArray.filter(function (letter) { return vowels.includes(letter); }).length;
    return vowelCount;
}
//Função para processar o input do formulário e mostrar o resultado
function formResult() {
    var promptedWord = document.getElementById("word").value;
    document.getElementById("result").innerHTML = countVowels(promptedWord).toString();
}
