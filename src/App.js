import React from 'react';
import UserList from './components/UserList';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from './redux/actions/action';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(({data}) => data.items);

  React.useEffect(() => {
    if (users === null) {
    dispatch(fetchUsers());
    } return users;
}, [dispatch, users]);

  return (
    <div className="wrapper">
      <UserList users={users}/>
    </div>
  );
}

export default App;
