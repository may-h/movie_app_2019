import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./compnonent/Navigation";

//HashRouter, BrowerRouter가 있는데, 해시를 사용하는 이유는 gh-pages에서 설정하기 편하기 때문에.(브라우저라우터는 설정하기 복잡)
//HashRouter를 쓰면 url에 /#/about이 보인다. 일반 /about 형식으로 보여지려면 브라우저라우터를 쓰면 된다.

//Route는 만드시 Router 안에 위치해야 한다!
//exact={true} 해줘야지 정확히 일치하는 path만 연결됨. 안해주면 포함된 path를 다 연결해줘서 우리가 의도하는 바와 맞지 않다.
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
