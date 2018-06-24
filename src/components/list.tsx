import * as React from 'react';
import '../App.css';
import './list.css';

// import logo from './logo.svg';
import Header from './header';


const people = [
  { name: 'ram', age: 29 },
  { name: 'hari', age: 30 },
  { name: 'gopal', age: 25 },
  { name: 'sita', age: 29 },
]

const Row = (props: {
  id: number,
  name: string,
  age: number,
  expand: boolean,
  rowClick?: () => void
}) => {
  return (
    <tr key={props.id}>
      <td>{props.id}-{props.name}</td>
      <td>{props.age}</td>
      <td>   <button onClick={props.rowClick} className={'mybutton'}>{props.expand === true ? '▲' : '▼'}</button></td>
    </tr>
  );
};

const RowDetails = (props: {
  id: number,
  name: string,
  age: number,
  expand: boolean,
}) => {
  if (props.expand === true) {
    return (
      <tr key={props.id + '-expanded'}>
        <td className={'rw-details'} colSpan={3}>My details are XYZ<br />
          showDetails={String(props.expand)}<br />
          id={props.id}<br />
          name={props.name}<br />
          age={props.age}
        </td>
      </tr>
    )
  }
  return (null)
};


class TableRows extends React.Component {
  public state = { expand: {} };
  public render() {
    return (
      people.map((t, id) => {
        const rowClickHandler = () => {
          const st = this.state.expand;
          st[id] = !st[id];
          this.setState({ expand: st });
          console.log('this.state.status[' + id + ']=' + this.state.expand[id]);
        }
        return (
          <React.Fragment key={id}>
            <Row id={id} name={t.name} age={t.age} expand={this.state.expand[id]} rowClick={rowClickHandler} />
            <RowDetails id={id} name={t.name} age={t.age} expand={this.state.expand[id]} />
          </React.Fragment>
        );
      })
    );
  }
}


class ListSample extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <p>My Listing here </p>
        <table >
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
              <th>&nbsp;&nbsp;&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <TableRows />
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListSample;
