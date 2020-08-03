import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
// import Modal from 'react-modal';
import CardForm from './CardForm';
import getCardInfoById from '../../utils/getCardInfoById';
import { editCardTitle, deletCard } from '../../actions/list';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: "column",
        width: "50%",
        height: "60%"

    }
};

// Modal.setAppElement('#root')

const EditCardModal = (props) => {
    let subtitle;
    const editInputRef = useRef(null);
    const { id } = useParams();
    const { card, list } = getCardInfoById(props.lists, id);

    const [isTitleEditable, setIsTitleEditable] = useState(false);
    const [cardTitle, setCardTitle] = useState(card ? card.title : "");

    const makeTitleEdit = (e) => {
        setIsTitleEditable(true);
    }
    const changeTitle = (e) => {
        const text = e.target.value
        setCardTitle(text);
    }
    const finishChange = (e) => {
        if (!!cardTitle && cardTitle !== card.title) {
            props.startEditCardTitle(cardTitle, list.id, id)
        }
        setIsTitleEditable(false);
    }


    const closeModal = () => {
        props.history.push('/');
    }
    const afterOpenModal = () => {
        subtitle.style.color = '#f00';
    }
    const valid = () => {
        if ((!!id && !!card && !!list)) {
            return true;
        }
        props.history.push('/');
    }

    useEffect(() => {
        if (editInputRef.current) {
            editInputRef.current.focus();
        }
    }, [isTitleEditable])
    return (
        <Modal open={valid()} onClose={closeModal} center styles={{modal:{padding:"1%" ,width:"50%"}}}>
            <div className="cardModal-header">
                    {isTitleEditable ?
                        <input
                            type="text"
                            value={cardTitle}
                            onChange={changeTitle}
                            onBlur={finishChange}
                            autoComplete="off"
                            className="cardModal-editTitleInput"
                            ref={editInputRef}
                        />
                        :
                        <h1 onClick={makeTitleEdit} ref={_subtitle => (subtitle = _subtitle)}>Card title: {card ? card.title : "Edit"}</h1>
                    }

                    <h3 ref={_subtitle => (subtitle = _subtitle)}>List title:{list ? list.title : ""}</h3>
                
            </div>
            <CardForm card={card} listId={list.id} deletCard={props.startDeletCard} closeModal={closeModal} />
        </Modal>



    );
}
const mapStateToProps = (state) => ({
    lists: state.lists

})
const mapDispacthToProps = (dispatch) => ({
    startDeletCard: (listId, cardId) => dispatch(deletCard(listId, cardId)),
    startEditCardTitle: (title, listId, cardId) => dispatch(editCardTitle(title, listId, cardId))

})
export default connect(mapStateToProps, mapDispacthToProps)(EditCardModal);