const vowels: string = 'aeiou';

//Função que retorna a quantidade de vogais da palavra passada
function countVowels(word: string) {
    word = word.toLowerCase();
    let wordArray: string[] = word.split("");
    let vowelCount: number = wordArray.filter(letter => vowels.includes(letter)).length;
    return vowelCount;
}

//Função para processar o input do formulário e mostrar o resultado
function formResult() {
    const promptedWord = (<HTMLInputElement>document.getElementById("word")).value;
    document.getElementById("result")!.innerHTML = countVowels(promptedWord).toString();
}