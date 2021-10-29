//Função que retorna a bio do id passado
function getBioImp(givenId: number) {
    let bio: string = list.find(i => i.id === givenId)?.bio;
    return bio;
}

//Função que retorna o name do id passado
function getNameImp(givenId: number) {
    let name: string = list.find(i => i.id === givenId)?.name;
    return name;
}

//Função que apaga o item do id passado
function deleteItemImp(givenId: number) {
    let newList = list.filter(i => i.id !==givenId);
    return newList;
}

//Função que permite alterar o name ou a bio do id passado
function updateItemImp(givenId: number, newName: string, newBio: string) {
    let objIndex: number = list.findIndex((obj => obj.id == 1));
    let newList: Array<any> = list;
    newList[objIndex].name = newName;
    newList[objIndex].bio = newBio;
    return newList;
}

