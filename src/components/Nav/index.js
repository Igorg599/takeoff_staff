import React from 'react';
import { TextField } from '@material-ui/core';

const Nav = ({searchUser}) => {

    function onUpdateSearch(e) {
        searchUser(e.target.value.toLowerCase());
    }

    return (
        <>
            <div className='nav'>
                <TextField 
                id="outlined-basic" 
                label="Поиск по имени" 
                variant="outlined" 
                onChange={onUpdateSearch}/>
            </div>
        </>
    )
}

export default Nav;