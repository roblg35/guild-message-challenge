import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Message = ({ message, author }) => (
  <Typography>
    <i>{author}</i>: {message}
  </Typography>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Message;
