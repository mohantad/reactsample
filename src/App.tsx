import * as React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';


// import logo from './logo.svg';
import ButtonSample from './components/buttonsample';
import CheckboxSample from './components/checkboxsample';
import ListSample from './components/list';


class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route  path='/buttonsample' component={ButtonSample}/>
        <Route  path='/checkboxsample' component={CheckboxSample}/>
        <Route  path='/listsample' component={ListSample}/>
        <Route  path='/' component={ButtonSample}/>
      </Switch>
    );
  }
}

export default App;
