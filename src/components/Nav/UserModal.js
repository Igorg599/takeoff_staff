import React from 'react';
import { TextField } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {addNewUser} from '../../redux/actions/action';

const UserModal = ({active, setActive}) => {
    const dispatch = useDispatch();
    const [newName, setNewName] = React.useState('');
    const [newTel, setNewTel] = React.useState('');

    const onValueNameChange = (e) => {
        setNewName(e.target.value.replace(/[^а-яА-Я]/g, ''));
    }

    const onValueNameTel = (e) => {
        setNewTel(e.target.value);
    }

    const onSaveUser = (e) => {
        e.preventDefault();
        const newobj = {
            id: Date.now(),
            name: newName,
            tel: newTel,
        }
        dispatch(addNewUser(newobj));
        setActive(false);
        document.body.style.overflow = 'visible';
        setNewName('');
        setNewTel('');
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => {setActive(false); document.body.style.overflow = 'visible'}}>
            <div className="cl-btn-4" onClick={() => {setActive(false); document.body.style.overflow = 'visible'}}></div> 
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <form onSubmit={onSaveUser}>
                    <div className='modal__content-form'>
                        <div className='modal__content-form-left'>
                            <p>Введите имя:</p>
                            <p>Введите номер телефона:</p>
                        </div>
                        <div>
                            <div className='modal__content-form-input'>
                                <TextField type='text' onChange={onValueNameChange} value={newName} label="имя" variant="outlined" size="small" required/>
                            </div>
                            <div className='modal__content-form-input'>
                                <TextField type='number' onChange={onValueNameTel} value={newTel} label="номер телефона" variant="outlined" size="small" required/>
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='modal__content-button'>Добавить пользователя</button>
                </form>
            </div>  
        </div>
    )
}

export default UserModal;