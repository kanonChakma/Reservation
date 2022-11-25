import React from "react";
import Featured from "../../component/Featured/Featured";
import FeaturedProperties from "../../component/FeaturedProperties/FeaturedProperties";
import Header from "../../component/Header/Header";
import MailList from "../../component/MailList/MailList";
import PropertyList from "../../component/PropertyList/PropertyList";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Header type="home" />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
      </div>
    </div>
  );
};

export default Home;
