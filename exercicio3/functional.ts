//Função que retorna o maior valor, o menor valor e o valor médio de uma lista recebida, utilizando o paradigma funcional
function fnctFunction (list: any[]) {
    //Valida se a lista é numérica
    function isNumberArray (list: any[]) {
        return Array.isArray(list) && list.every((value) => typeof value === 'number')
    }
    if(!isNumberArray(list)) {
        return;
    }
    
    //Ordena a lista para encontrar os valores maior e menor
    let sortedList: number[] = list.sort((n1, n2) => n1 - n2);
    let minValue = sortedList [0];
    let maxValue = sortedList [list.length - 1];
    //Soma todos os valores e calcula o valor médio
    let sum = list.reduce((a, b) => a + b, 0);
    let avgValue = sum/list.length;
    
    let answerList = [maxValue, minValue, avgValue];
    return answerList;
    }