import React from 'react';
import { TextField } from '@material-ui/core';

function Authentication() {
    return (
        <>
            <h1>Авторизация</h1>
            <form>
                <div className='modal__content-form'>
                    <div className='modal__content-form-left'>
                        <p>Введите логин:</p>
                        <p>Введите пароль:</p>
                    </div>
                    <div>
                        <div className='modal__content-form-input'>
                            <TextField type='text' label="Логин" variant="outlined" size="small" required/>
                        </div>
                        <div className='modal__content-form-input'>
                            <TextField type='password' label="Пароль" variant="outlined" size="small" minlength={8} required/>
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