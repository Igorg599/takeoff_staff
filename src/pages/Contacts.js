import React from 'react';
import UserList from '../components/UserList';
import {useSelector} from 'react-redux';
import Nav from '../components/Nav';
import { Redirect } from 'react-router-dom';

function Contacts() {
    const contacts = useSelector(({data}) => data.contacts);
    const [inputVolume, setInputVolume] = React.useState('');
    const authentication = useSelector(({data}) => data.authentication);
  
    function searchUser(value) {
      setInputVolume(value);
    }
  
    let newContacts = [];
  
    if (contacts === null) {
      return newContacts;
    } else {
      newContacts = contacts.filter((location) => {
        return location.name.toLowerCase().indexOf(inputVolume) > -1
      });
    }

    if (authentication === false) {
      return <Redirect to='/'/>
  } 
  
    return (
      <>
        <Nav searchUser={searchUser}/>
        <UserList contacts={newContacts}/>
      </>
    );
  }
  
  export default Contacts;