import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Form from './Views/form.View';
import FormUpdate from './Views/formUpdate.View';
import Detail from './Views/detail.View';
import List from './Views/list.View';

function App() {
  return (
      <Router>
        <Form path="/index"/>
        <List path="/viewAll"/>
        <FormUpdate path="/:id/update" />
        <Detail path="/:id" />
      </Router>
  );
}
export default App;
