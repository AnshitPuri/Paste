import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="Container">
      <div className="textArea">
        <div className="headings">
          <h1> Your Personal </h1>
          <h2> Pasteboard </h2>
        </div>
        <p>
          Create, store, and manage your pastes easily. A minimal and fast home
          for your notes and code snippets.
        </p>
      </div>
      <div className="animationArea">

          <div className="animations animation1">
            <div className="animationTitle1"></div>
            <div className="animationSection"></div>
            <div className="animationSection animationSection1"></div>
            <div className="animationSection animationSection2"></div>
          </div>

          <div className="animations animation2 ">
            <div className="animationTitle2"></div>
            <div className="animationSection"></div>
            <div className="animationSection animationSection1"></div>
            <div className="animationSection animationSection2"></div>
            <div className="animationSection animationSection3"></div>
            
        </div>
      </div>
    </div>
  );
};

export default Home;
