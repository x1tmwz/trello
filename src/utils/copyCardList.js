export default (list=[])=>{
    const newArr = [];
    for(let i=0;i<list.length;i++){
        const newObj = {...list[i]}
        newArr.push(newObj);
    }
    return newArr;

}