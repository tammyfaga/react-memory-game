import React from 'react';
import Grid from '@material-ui/core/Grid';

const Board = ({children}) => (
  <Grid container>
    {children}
  </Grid>

);

export default Board;