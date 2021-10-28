//Função que retorna a quantidade de vogais da palavra passada
function countVowels(word) {
    word = word.toLowerCase();
    var vowelCount = 0;
    //Loop iterando por cada letra da palavra
    for (var i = 0; i < word.length; i++) {
        //se a letra for uma das vogais (a e i o u), a contagem recebe +1
        if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
            vowelCount++;
        }
    }
    //Retorna a contagem com o total de vogais na palavra
    return vowelCount;
}
//Função para processar o input do formulário e mostrar o resultado
function formResult() {
    //guarda as informações referentes ao campo do formulário com id "word"
    var formInput = document.getElementById("word");
    //guarda o valor inserido no campo do formulário pelo usuário
    var promptedWord = formInput.value;
    //Conta o número de vogais na palavra inserida
    var result = countVowels(promptedWord);
    //Revela o resultado na página
    document.getElementById("result").innerHTML = result.toString();
}
