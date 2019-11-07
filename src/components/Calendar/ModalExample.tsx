import * as  React from 'react';
import { Button, Modal,
  //  ModalHeader,
    ModalBody, 
  // ModalFooter, 
  // Input, Label, Form, FormGroup 
} from 'reactstrap';

interface IModalExampleState{
      modal: boolean;
      backdrop: boolean;
}
class ModalExample extends React.Component<IModalExampleState> {
  public state:IModalExampleState;
  public constructor(props:any, state: IModalExampleState) {
    super(props);
    this.state = {
      modal: false,
      backdrop: false
    };

    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  public toggle() {
    this.setState({modal:!this.state.modal});
  }

  public changeBackdrop(e:any) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  public render() {
    return (
      <div onClick={this.toggle}>
      &emsp;&emsp;&emsp;<Button color="danger" onClick={this.toggle}>Show Modal</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className='resizable' >
        {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader> */}
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      </Modal>
    </div>
    );
  }
}

export default ModalExample;