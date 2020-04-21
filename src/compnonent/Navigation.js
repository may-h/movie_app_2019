import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  //a 태그의 href를 쓰면 화면 이동할때마다 새로고침이 된다.
  //새로고침 안되게 하려면 react-router-dom의 Link 컴포넌트를 사용한다.
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
