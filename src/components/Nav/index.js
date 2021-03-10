import React from 'react';
import { TextField, Button } from '@material-ui/core';
import SortPopUp from './SortPopUp';
import UserModal from './UserModal';

const Nav = ({searchUser}) => {
    const [modalActive, setmodalActive] = React.useState(false);

    function onUpdateSearch(e) {
        searchUser(e.target.value.toLowerCase());
    }

    return (
        <>
            <div className='nav'>
                <Button onClick={() => {setmodalActive(true); document.body.style.overflow = 'hidden'}} variant="contained" color="primary">
                    Добавить нового пользователя
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