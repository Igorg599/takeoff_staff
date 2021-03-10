import React from 'react';
import {Route} from 'react-router-dom';

import Contacts from './pages/Contacts';
import Authentication from './pages/Authentication';

function App() {
  return (
    <div className="wrapper">
      <Route path="/" component={Authentication} exact/>
      <Route path="/contacts" component={Contacts} exact/>
    </div>
  );
}

export default App;
