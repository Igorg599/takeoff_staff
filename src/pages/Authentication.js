import React from 'react';
import { TextField } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers, fetchContacts} from '../redux/actions/action';
import { Redirect } from 'react-router-dom';

function Authentication() {
    const dispatch = useDispatch();
    const [newLogin, setNewLogin] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const authentication = useSelector(({data}) => data.authentication);
    const users = useSelector(({data}) => data.users);

    const onValueNameChange = (e) => {
        setNewLogin(e.target.value);
    }

    React.useEffect(() => {
        if (users === null) {
        dispatch(fetchUsers());
        } return users;
    }, [dispatch, users]);

    const onValuePasswordChange = (e) => {
        setNewPassword(e.target.value);
    }

    const onAuthenticationUser = (e) => {
        e.preventDefault();
        const newobj = {
            login: newLogin,
            password: newPassword,
        }
        dispatch(fetchContacts(newobj));
        setNewLogin('');
        setNewPassword('');
    }

    if (authentication) {
        return <Redirect to='/contacts'/>
    }    

    return (
        <>
            <h1>Авторизация</h1>
            <form onSubmit={onAuthenticationUser}>
                <div className='modal__content-form'>
                    <div className='modal__content-form-left'>
                        <p>Введите логин:</p>
                        <p>Введите пароль:</p>
                    </div>
                    <div>
                        <div className='modal__content-form-input'>
                            <TextField type='text' onChange={onValueNameChange} value={newLogin} label="Логин" variant="outlined" size="small" required/>
                        </div>
                        <div className='modal__content-form-input'>
                            <TextField type='password' onChange={onValuePasswordChange} value={newPassword} label="Пароль" variant="outlined" size="small" required/>
                        </div>
                    </div>
                </div>
                <div className='authentication__button'>
                    <button type='submit' className='modal__content-button'>Войти</button>
                </div>
            </form>
        </>
    );
}

export default Authentication;