import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import SaveIcon from '@material-ui/icons/Save';
import {useDispatch} from 'react-redux';
import {changeUser} from '../../redux/actions/action';

const UserListItem = ({id, name, tel, onRemove, index}) => {
    const dispatch = useDispatch();
    const [dataInput, setDataInput] = React.useState(true);
    const [newName, setNewName] = React.useState(name);
    const [newTel, setNewTel] = React.useState(tel);

    const onDeleteUser = () => {
        onRemove(id);
    }

    const onValueNameChange = (e) => {
        setNewName(e.target.value.replace(/[^а-яА-Я]/g, ''));
    }

    const onValueNameTel = (e) => {
        setNewTel(e.target.value);
    }

    const onSaveUser = (e) => {
        e.preventDefault();
        const newobj = {
            id: id,
            name: newName,
            tel: newTel,
        }
        dispatch(changeUser(newobj));
        setDataInput(!dataInput);
    }

    return (
        <form onSubmit={onSaveUser} className='userlist__item'>
            <div className='userlist__item-left'>
                <p>Имя:</p>
                <p>Телефон:</p>
            </div>
            {dataInput ? 
                <div className='userlist__item-right'>
                    <p>{name}</p>
                    <p>{tel}</p>
                </div> :
                <div className='userlist__item-right-inputs'>
                    <input type='text' className='userlist__item-right-inputs-item' onChange={onValueNameChange} value={newName} required/>
                    <input type='number' className='userlist__item-right-inputs-item' onChange={onValueNameTel} value={newTel} required/>
                </div>
            }
            <button type='button' className='userlist__item-button_delete' onClick={onDeleteUser}>
                <DeleteIcon size="small" color="secondary"/>
            </button>
            {dataInput ?
                <div className='userlist__item-button_editor' onClick={() => setDataInput(!dataInput)}>
                    <BorderColorIcon color="primary"/>
                </div> :
                <button type='submit' className='userlist__item-button_editor'>
                    <SaveIcon color="primary"/>
                </button>
            }
            <div className='userlist__item-number'>№ {index+1}</div>
        </form>
    )
}

export default UserListItem;