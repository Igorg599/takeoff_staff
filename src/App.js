import React from 'react';
import UserList from './components/UserList';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from './redux/actions/action';
import Nav from './components/Nav';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(({data}) => data.items);
  const [inputVolume, setInputVolume] = React.useState('');

  function searchUser(value) {
    setInputVolume(value);
  }

  React.useEffect(() => {
      if (users === null) {
      dispatch(fetchUsers());
      } return users;
  }, [dispatch, users]);

  let newUsers = [];

  if (users === null) {
    return newUsers;
  } else {
    newUsers = users.filter((location) => {
      return location.name.toLowerCase().indexOf(inputVolume) > -1
    });
  }

  return (
    <div className="wrapper">
      <Nav searchUser={searchUser}/>
      <UserList users={newUsers}/>
    </div>
  );
}

export default App;
