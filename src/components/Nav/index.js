import React from 'react';
import { TextField, Button } from '@material-ui/core';
import SortPopUp from './SortPopUp';
import UserModal from './UserModal';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ChengeExit} from '../../redux/actions/action';

const Nav = ({searchUser}) => {
    const dispatch = useDispatch();
    const [modalActive, setmodalActive] = React.useState(false);

    function onUpdateSearch(e) {
        searchUser(e.target.value.toLowerCase());
    }

    const setExit = () => {
        dispatch(ChengeExit());
    }

    return (
        <>
            <Link to="/">
                <div className='exit'>
                    <Button onClick={() => setExit(true)} variant="outlined">
                        Выйти
                    </Button>
                </div>
            </Link>
            <div className='nav'>
                <Button onClick={() => {setmodalActive(true); document.body.style.overflow = 'hidden'}} variant="contained" color="primary">
                    Добавить новый контакт
                </Button>
                <TextField 
                id="outlined-basic" 
                label="Поиск по имени" 
                variant="outlined" 
                onChange={onUpdateSearch}/>
                <SortPopUp/>
            </div>
            <UserModal active={modalActive} setActive={setmodalActive}/>
        </>
    )
}

export default Nav;