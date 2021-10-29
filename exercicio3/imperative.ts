//Função que retorna o maior valor, o menor valor e o valor médio de uma lista recebida, utilizando o paradigma imperativo
function impFunction (inputList: any[]) {
    //Valida se a lista é numérica
    for (let j = 0; j < inputList.length; j++) {
        if (typeof(inputList[j]) !== 'number') {
            return;
        }
    }

    let maxValue = inputList[0];
    let minValue = inputList[0];
    let sum = 0;    
    
    //Encontra o valor maior, valor menor e calcula a soma de todos os valores
    for (let i = 0; i < inputList.length; i++) {
        sum += inputList[i];
        if (inputList[i] < minValue) {
            minValue = inputList[i];
        }
        if (inputList[i] > maxValue) {
            maxValue = inputList[i];
        }  
    }
    
    //Calcula o valor médio
    let avgValue = parseFloat((sum/inputList.length).toFixed(2));
    
    let answerList = [maxValue, minValue, avgValue];
    return answerList;
}