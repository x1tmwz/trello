import { v4 as uuid } from 'uuid'
const addNewList = (title) => ({
    type: "NEW_LIST",
    title,
    id: uuid()
})
const deletList = (id) => ({
    type: "DELET_LIST",
    id
})

const addNewCard = (title, listId) => ({
    type: "NEW_CARD",
    listId,
    card: {
        title,
        id: uuid()
    }
})
const editListTitle = (title, listId) => ({
    type: "EDIT_LIST_TITLE",
    title,
    listId
})
const editCardTitle = (title, listId, cardId) => ({
    type: "EDIT_CARD_TITLE",
    title,
    listId,
    cardId

})
const deletCard = (listId,cardId) => ({
    type: "DELET_CARD",
    listId,
    cardId
})
const swapLists = (dragIndex, hoverIndex) => ({
    type: "SWAP_LISTS",
    dragIndex,
    hoverIndex
})
const swapCards = (listId,startIndex,endIndex) => ({
    type: "SWAP_CARDS",
    listId,
    startIndex,
    endIndex
})
const swapCardsBetweenLists = (dragFromListId, dragToListId,source,destination) => ({
    type: "SWAP_CARDS_BETWEEN_LISTS",
    dragFromListId,
    dragToListId,
    source,
    destination
})
export {
    deletCard,
    addNewList,
    deletList,
    addNewCard,
    swapLists,
    swapCards,
    swapCardsBetweenLists,
    editCardTitle,
    editListTitle
}