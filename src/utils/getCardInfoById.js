export default (arr=[],cardId)=>{
    const cardInfo ={};
    arr.map((list)=>{
        const foundCard = list.list.find((card)=>card.id === cardId);
        if(foundCard){
            cardInfo.card = foundCard;
            cardInfo.list = list;
        }
        return true;
    })
    return cardInfo;
}