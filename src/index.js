import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
// npm install react-router-dom
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/Video'
import CadastroCategoria from './pages/Cadastro/Categoria';

// Criando pagina de erros
const Pagina404 = () => (<div>Erro, Página404</div>)

// Criação de Rotas
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


