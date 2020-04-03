import { connect } from 'react-redux';
import { addMessage } from '../Redux/actions';
import { compose } from 'recompose';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import PropTypes from 'prop-types';

const AddMessage = props => (
  <TextField
    label="Enter in Message"
    variant="outlined"
    fullWidth
    onKeyPress={e => {
      if (e.key === 'Enter') {
        props.dispatch(e.target.value, 'Me');
        e.target.value = '';
      }
    }}
    type="text"
  />
);
AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author));
  },
});

export default compose(connect(() => ({}), mapDispatchToProps))(AddMessage);
