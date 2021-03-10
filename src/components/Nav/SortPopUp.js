import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useDispatch} from 'react-redux';
import {sortUsersName, sortUsersTel} from '../../redux/actions/action';

export default function SortPopUp() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSortUsersName = () => {
    setAnchorEl(null);
    dispatch(sortUsersName());
  };

  const onSortUserstel = () => {
    setAnchorEl(null);
    dispatch(sortUsersTel());
  };

  return (
    <div>
      <Button variant="contained" color="secondary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Сортировка
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onSortUsersName}>По имени</MenuItem>
        <MenuItem onClick={onSortUserstel}>По телефону</MenuItem>
      </Menu>
    </div>
  );
}