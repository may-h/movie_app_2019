import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      //redirect 시키기.  this.props.history를 사용하면 url을 바꿀 수 있다.
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}
export default Detail;
