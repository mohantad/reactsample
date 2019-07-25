import * as React from 'react';
import '../App.css';

class Header extends React.Component {
  public render() {
    return (
      <div>
        <a href='./buttonsample'>button</a>&emsp;|&emsp;
          <a href='./checkboxsample'>checkbox</a>&emsp;|&emsp;
            <a href='./listsample'>listsample</a>&emsp;|&emsp;
              <a href='./ModalDialog'>ModalDialog</a>&emsp;|&emsp;
              <a href='./ChartSample'>ChartSample</a>&emsp;|&emsp;
              <a href='./ModalExample'>ModalExample</a>&emsp;|&emsp;
              <a href='./FileViewerSample'>file viewer</a>&emsp;|&emsp;
              <a href='./GoogleDocViewerSample'>google doc viewer </a>&emsp;|&emsp;
              <a href='./Calendar'>Calendar</a>
        <hr />
      </div>
    );
  }
}

export default Header;





