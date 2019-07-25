import * as React from 'react';
// import * as ReactModal from 'react-modal';
import swal from 'sweetalert';
import Header from './header';
import './ModalDialogSample.css';


export default class ModalDialogSample extends React.Component {
  public state = { st: '' };
  public render() {
    return (
      <header className="header">
       <div className="App">
         <Header/>
         </div>
          <button onClick={this.handleButton1Click}>Button1</button>
        <button onClick={this.handleButton2Click}>Button2</button>
        <button onClick={this.handleButton3Click}>Button2</button>
        <button onClick={this.handleButton4Click}>Button4</button>
        <button onClick={this.handleDownloadClick}>Download</button>
        <div className={'modal'+this.state.st}>
          <div className={'modal__header'}>
          hereder
          <button onClick={this.closeClick}>CLose</button>
          </div>
          <div className={'modal__content'}>
          bodu....
          </div>
          <div className={'modal__footer'}>
          footer
          </div>
        </div>  
      </header>
    );
  }

  private handleButton1Click = () => {
    // return(<MyModal/>)
  };
  private handleButton2Click = () => {
    swal("Hello world!");
  };
  private handleButton3Click = () => {
    //      alert.show('Oh look, an alert!');this.props.alert.show(<div style={{ color: 'blue' }}>Some Message</div>)
  };
  private handleButton4Click = () => {
    this.setState({ st: '.open' });
  };
  private closeClick = () => {
    this.setState({ st: '' });
  };
  private handleDownloadClick = () => {
    this.saveData('https://www.w3schools.com/howto/howto_js_full_page_tabs.asp','tabbed.html')

  };

  private saveData = (url: string, fileName: string)=> {
    const a = document.createElement("a");
    document.body.appendChild(a);
    // const json = JSON.stringify(data);
    // const blob = new Blob(data, {type: "octet/stream"});
    // const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };

}

