import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider as ReduxProvider } from "react-redux";

import Routes from '../Routes';
import store from "../../store";

const App = () => (
  <ReduxProvider store={store}>
    <>
    <CssBaseline />
    <Router>
      <Routes />
    </Router>
    </>
  </ReduxProvider>
);

export default App;