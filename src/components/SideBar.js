import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Avatar from './AvatarPicker';

const styles = () => ({
  userContainer: {
    height: '50px',
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
  },
});

const SideBar = ({ users, classes }) => (
  <div className={classes.userContainer}>
    <List dense>
      {users.map(user => (
        <ListItem key={user.id}>
          <Avatar />
          <ListItemText primary={user.name} secondary></ListItemText>
        </ListItem>
      ))}
    </List>
  </div>
);

SideBar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default compose(
  withStyles(styles),
  connect(
    state => ({
      users: state.users,
    }),
    {}
  )
)(SideBar);
