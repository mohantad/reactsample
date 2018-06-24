import * as React from 'react';
import '../App.css';
import Header from './header';

export interface IMyButtonProps {
  type: 'inc'|'dec';
  counter: number;
  click:(count:number)=>void;
}
export class MyButton extends React.Component<IMyButtonProps> {
  
  public static defaultProps: Partial<IMyButtonProps> = { type: 'inc'}
  constructor(props:IMyButtonProps){
      super(props);
  }

  
  public render() {
      console.log('I was triggered during render');
      const clickHandler=()=>{
          let t= this.props.counter;
          if(this.props.type==='inc'){
              t++;
          }else {
              t--;
          }
          this.props.click(t);
      }
      return (
          <div className="App">

              <p className="App-intro">
                  <button onClick={clickHandler}>{this.props.type}</button>
              </p>
          </div>
      );
  }
}

export interface IAppState {
  counter: number;
}
class ButtonSample extends React.Component {
  public state = { counter: 0 }

  public render() {
    const updateState = (cnt: number) => {
      this.setState({ counter: cnt });
    };
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
        Result is = {this.state.counter}.<br /><hr />
        <MyButton type={"inc"} counter={this.state.counter} click={updateState} />  ~  <MyButton type={"dec"} counter={this.state.counter} click={updateState} />
        </p>
      </div>
    );
  }
}

export default ButtonSample;
