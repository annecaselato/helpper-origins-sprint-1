//Função que retorna o maior valor, o menor valor e o valor médio de uma lista numérica recebida, utilizando o paradigma funcional
function inspectListByFunctional(inputList: number[]): number[] { 
    //Ordena a lista para encontrar os valores maior e menor
    let sortedList: number[] = inputList.sort((n1, n2) => n1 - n2);
    let minValue: number = sortedList [0];
    let maxValue: number = sortedList [inputList.length - 1];
    //Soma todos os valores e calcula o valor médio
    let sum: number = inputList.reduce((a, b) => a + b, 0);
    let avgValue: number = sum/inputList.length;
    
    let outputList: number[] = [maxValue, minValue, avgValue];
    return outputList;
    }