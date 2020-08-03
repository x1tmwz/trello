export default (arr=[])=>{
    const newArr = [];
    for(let i=0;i<arr.length;i++){
        const newList =[];
        for(let j = 0;j< arr[i].list.length;j++){
            newList.push({...arr[i].list[j]})
        }
        const newObj = {...arr[i],list:newList}
        newArr.push(newObj);
    }
    return newArr;

}