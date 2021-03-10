import React from 'react';
import UserList from '../components/UserList';
import {useSelector} from 'react-redux';
import Nav from '../components/Nav';

function Contacts() {
    const contacts = useSelector(({data}) => data.contacts);
    const [inputVolume, setInputVolume] = React.useState('');
  
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
  
    return (
      <>
        <Nav searchUser={searchUser}/>
        <UserList contacts={newContacts}/>
      </>
    );
  }
  
  export default Contacts;