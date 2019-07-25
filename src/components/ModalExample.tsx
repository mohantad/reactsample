import * as React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Header from './header';

interface IModalExampleProps {
  buttonLabel: string;
  className: string;
}

interface IModalExampleState {
  closeAll?: boolean;
  modal?: boolean;
  nestedModal?: boolean;
}

class ModalExample extends React.Component<IModalExampleProps, IModalExampleState> {
  constructor(props: IModalExampleProps, state: IModalExampleState) {
    super(props);
    this.state = {
      closeAll: false,
      modal: false,
      nestedModal: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  public render() {
    return (
      <header className="header">
        <div className="App">
          <Header />
          <div>
            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>


      </header>
    );
  }

  private toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  private toggleNested() {
    this.setState({
      closeAll: false,
      nestedModal: !this.state.nestedModal
    });
  }

  private toggleAll() {
    this.setState({
      closeAll: true,
      nestedModal: !this.state.nestedModal
    });
  }
}

export default ModalExample;