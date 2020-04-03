import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import Message from './Messages';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = () => ({
  messageList: {
    height: '100%',
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
    zIndex: 900,
  },
});

const MessagesList = ({ messages, classes }) => (
  <div className={classes.messageList}>
    <List dense>
      {messages.map(message => (
        <ListItem key={message.id}>
          <ListItemText
            primary={<Message key={message.id} {...message} />}
            secondary
          ></ListItemText>
        </ListItem>
      ))}
    </List>
  </div>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default compose(
  withStyles(styles),
  connect(state => ({ messages: state.messages }), {})
)(MessagesList);
