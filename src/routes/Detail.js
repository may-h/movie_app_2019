import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      //redirect 시키기.  this.props.history를 사용하면 url을 바꿀 수 있다.
      history.push("/");
    }
  }

  render() {
    const {
      location: { state },
    } = this.props;
    if (state) {
      return (
        <div className="detail">
          <img src={state.poster} alt={state.title} title={state.title} />
          <div className="movie__data">
            <h3 className="movie__title">{state.title}</h3>
            <h5 className="movie__year">{state.year}</h5>
            <ul className="movie__genres">
              {state.genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie__summary">{state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
