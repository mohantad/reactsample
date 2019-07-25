import * as React from 'react';
import './list.css';

// import logo from './logo.svg';
import Header from './header';


const people = [
  { name: 'ram', age: 29 },
  { name: 'hari', age: 30 },
  { name: 'gopal', age: 25 },
  { name: 'sita', age: 29 },
  { name: 'Jack', age: 29 },
  { name: 'David', age: 29 },
  { name: 'William', age: 29 },
  { name: 'George', age: 29 },
  { name: 'Rebeca', age: 29 },
  { name: 'Matsumoto', age: 29 },
  { name: 'Motose', age: 29 },
  { name: 'Nakamura', age: 29 },
  { name: 'Tomita', age: 29 },
  { name: 'Komiya', age: 29 },
  { name: 'Yuki', age: 29 },
  { name: 'Wong', age: 29 },
  { name: 'Chan', age: 29 },
  { name: 'Cheng', age: 29 },
  { name: 'Yuang', age: 29 },
  { name: 'Jing', age: 29 },
  { name: 'Cheung', age: 29 },
  { name: 'Leung', age: 29 },
]

const Row = (props: {
  id: number,
  name: string,
  age: number,
  expand: boolean,
  rowClick?: () => void
}) => {
  return (
    <tr id={props.name} key={props.id}>
      <td><div>{props.id}-{props.name}</div></td>
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
      <tr  key={props.id + '-expanded'}>
        <td className={'rw-details'} colSpan={3}>
        <div>
          <table>
            <tr>
              <td>
                prev  next
                </td>
                <td>
                  close
                  </td>
              </tr>
            </table>
        </div>
        
        
        My details are XYZ<br />
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

  public componentDidMount(){
    const node=document.getElementById('Cheung');
    if(node){
      node.scrollIntoView(true);
    }
  }

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
          <React.Fragment  key={id}>
            <tr>
              <td colSpan={3} id={t.name}/>
                
                </tr>
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
