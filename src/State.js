import React from 'react';

class State extends React.Component {
  //Component가 갖고 있는 state를 쓰기 위해 클래스 컴포넌트를 사용. 
  //state 왜 사용해 ?  데이터는 변하니까!
  //state는 객체야 
  state = {
    count: 0
  }

  add = () => {
    //setState함수를 써줘야지 render()가 실행되면서 바뀐 state값이 화면에 rerender 된다!
    //그냥 this.state.count = 1 이렇게 하면 렌더링이 되지 않는다. 
    /* 
        this.setState({count : ++this.state.count}) 는 좋은 방법이 아니다. 
        setState() 의 파라미터로 current를 받으면 현재 state 값을 얻을 수 있다. 
        current를 써주는 것이 state를 set할 때, 리액트에서 외부의 상태에 의존하지 않는 가장 좋은 방법! 
    */
     this.setState(current => ({count : current.count + 1}));
  }

  minus = () => {
    //setState() 인자값으로 state 객체(Object)를 설정해준다. 
    this.setState(current => ({count: current.count - 1}));
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

export default State;
