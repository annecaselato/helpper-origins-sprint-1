//Função que retorna o maior valor, o menor valor e o valor médio de uma lista numérica, utilizando o paradigma imperativo
function inspectListByImperative(inputList: number[]): number[] {
    let maxValue: number = inputList[0];
    let minValue: number = inputList[0];
    let sum: number = 0;
    
    //Encontra o valor maior, valor menor e calcula a soma de todos os valores
    for (let index = 0; index < inputList.length; index++) {
        sum += inputList[index];
        if (inputList[index] < minValue) {
            minValue = inputList[index];
        }
        if (inputList[index] > maxValue) {
            maxValue = inputList[index];
        }  
    }
    
    //Calcula o valor médio
    let avgValue: number = parseFloat((sum/inputList.length).toFixed(2));
    
    let outputList: number[] = [maxValue, minValue, avgValue];
    return outputList;
}