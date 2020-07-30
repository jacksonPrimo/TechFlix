import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/" exact component={Home}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();