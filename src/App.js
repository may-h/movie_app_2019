import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  //Component가 갖고 있는 state를 쓰기 위해 클래스 컴포넌트를 사용. 
  //state 왜 사용해 ?  데이터는 변하니까!
  //state는 객체야 
  state = {
    count: 0
  }

  add = () => {
     console.log('add')
  }

  minus = () => {
    console.log('minus');
  }

  render() {
    return (
    <div>
      <h1> The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App;
