import React, { Component } from 'react';
import Sidebar from './components/SideBar';
import MessagesList from './components/MessageList';
import AddMessage from './components/AddMessage';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: ' #f5f5f5',
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 500,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  messageContainer: {
    flexDirection: 'column',
    display: 'flex',
    width: '100%',
    height: '80%',
    marginBottom: '12px',
  },
  sideBarContainer: { overflow: 'scroll' },
});

const App = ({ classes }) => (
  <div className={classes.container}>
    <div className={classes.sideBarContainer}>
      <Sidebar />
    </div>
    <Grid item xs={6}>
      <Paper className={classes.messageContainer}>
        <MessagesList />
      </Paper>
      <AddMessage />
    </Grid>
  </div>
);

export default compose(withStyles(styles))(App);
