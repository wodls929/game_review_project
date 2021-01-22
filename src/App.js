import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./component/Header";
import Search from './routes/Search';
import 'semantic-ui-css/semantic.min.css';


export default function App(){
  return (
    <HashRouter>
      <Header/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/search" component={Search}/>
    </HashRouter>
  );
} 
