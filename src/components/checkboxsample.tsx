import * as React from 'react';
import '../App.css';
import Header from './header';

class CheckboxSample extends React.Component {
  public render() {
    return (
      <div className="App">
      <Header/>
       <p>My mycheckbox sample here </p>
       <p className="App-intro">
                   Subscribe: <input type='checkbox' value='Subscribe'/><br/>
                   UnSubscribe: <input type='checkbox' value='Unsubscribe'/>

                </p>
      </div>
    );
  }
}

export default CheckboxSample;
