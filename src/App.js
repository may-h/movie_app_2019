import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

//yts-proxy.now.sh/list_movie.json
class App extends React.Component {
  // 순서 : state --> render --> componentDidMount() --> getMovies()
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    //axios가 데이터를 가져오기까지 시간이 좀 걸릴지 모르니까 기다리라는 의미로 await을 붙여준다.
    //await은 async 함수에서만 사용 가능하기 때문에 async 함수를 선언 해준다.
    // movies.data.data.movies 로 받아오지 말고 ES6 문법을 사용해서 다음과 같이 데이터를 뽑아 올 수 있다.
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading... </span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
