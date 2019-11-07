import * as React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


// import logo from './logo.svg';
import ButtonSample from './components/buttonsample';
import ChartSample from './components/ChartSample';
import CheckboxSample from './components/checkboxsample';
import ListSample from './components/list';
import ModalDialogSample from './components/ModalDialogSample';
import ModalExample from './components/ModalExample';
import FileViewerSample from './components/FileViewerSample';
import GoogleDocViewerSample from './components/GoogleDocViewerSample';
import CalendarSample from './components/CalendarSample';

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route  path='/buttonsample' component={ButtonSample}/>
        <Route  path='/checkboxsample' component={CheckboxSample}/>
        <Route  path='/listsample' component={ListSample}/>
        <Route  path='/ModalDialog' component={ModalDialogSample}/>
        <Route  path='/ChartSample' component={ChartSample}/>
        <Route  path='/ModalExample' component={()=><ModalExample  buttonLabel={'Hello Dialog'} className={'Hello Dialog'}/>}/>
        <Route  path='/FileViewerSample' component={FileViewerSample}/>
        <Route  path='/GoogleDocViewerSample' component={GoogleDocViewerSample}/>
        <Route  path='/Calendar' component={CalendarSample}/>
        <Route  path='/' component={CalendarSample}/>
        <Route  path='*' component={CalendarSample}/>
      </Switch>
    );
  }
}

export default App;
