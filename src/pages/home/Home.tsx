import React from "react";
import Featured from "../../component/Featured/Featured";
import Header from "../../component/Header/Header";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Header type="home" />
      <div className="homeContainer">
        <Featured />
      </div>
    </div>
  );
};

export default Home;
