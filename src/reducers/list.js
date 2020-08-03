import swap from '../utils/swapByIndex';
import copyState from '../utils/copyBoard';
import copyList from '../utils/copyCardList';


const defaultState = []

export default (state = defaultState, action) => {
    let copyOfState;
    switch (action.type) {
        case "NEW_LIST":
            return [...state, { title: action.title, id: action.id, list: [] }]
        case "DELET_LIST":
            return [...state.filter(list => list.id !== action.id)]
        case "NEW_CARD":
            copyOfState = copyState(state);
            const listIndex = copyOfState.findIndex(list => list.id === action.listId);
            if (listIndex !== -1) {
                const cList = copyList(copyOfState[listIndex].list);
                cList.push(action.card);
                copyOfState[listIndex].list = cList;
            }
            return [...copyOfState]
        case "DELET_CARD":
            copyOfState = copyState(state);
            const foundListIndex = copyOfState.findIndex((list) => list.id === action.listId);
            if (foundListIndex !== -1) {
                copyOfState[foundListIndex].list = copyOfState[foundListIndex].list.filter((card) => card.id !== action.cardId);
            }
            return [...copyOfState];
        case "SWAP_LISTS":
            copyOfState = copyState(state);
            swap(copyOfState, action.dragIndex, action.hoverIndex)
            return [...copyOfState]
        case "SWAP_CARDS": {
            copyOfState = copyState(state);
            const list = copyOfState.find(list=>list.id === action.listId).list;
            const [removed] =  list.splice(action.startIndex,1);
            list.splice(action.endIndex,0,removed);
            return [...copyOfState];
        }
        case "SWAP_CARDS_BETWEEN_LISTS": {
            copyOfState = copyState(state);
            const dragFromList = copyOfState.find(list=>list.id=== action.dragFromListId)
            const dragToList = copyOfState.find(list=>list.id=== action.dragToListId)
            const [removed] = dragFromList.list.splice(action.source.index, 1);
            dragToList.list.splice(action.destination.index,0,removed);
            return [...copyOfState]
        }
        case "EDIT_LIST_TITLE": {
            copyOfState = copyState(state);
            const foundList = copyOfState.find((list) => list.id === action.listId)
            if (!!foundList) {
                foundList.title = action.title;
            }
            return [...copyOfState]
        }
        case "EDIT_CARD_TITLE":{
            copyOfState = copyState(state);
            const foundList = copyOfState.find((list) => list.id === action.listId)
            if (!!foundList) {
                const foundCard = foundList.list.find((card)=>card.id === action.cardId);
                if(!!foundCard){
                    foundCard.title = action.title
                }  
            }
            return [...copyOfState]
        }
            


        default:
            return state;
    }

}