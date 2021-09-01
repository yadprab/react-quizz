import React from "react";
import { Logo } from "./Logo";
import Img from "../images/undraw.png";
import { Chev } from "./Chev";

function Main({setState}) {

   
  return (
    <>
      <main className="main--app">
        <div className="top--section">
          <nav>
            <Logo />
            <p>Grandmaster</p>
          </nav>
          <div className="image--section">
            <img src={Img} alt="Illustration" />
          </div>
        </div>

        <div className="bottom--section">
          <h1>Grab Life by the quiz </h1>
          <button className="start--button" onClick={()=>{setState({selected:true})}}>
            Start the Quizz <Chev />
          </button>
        </div>
      </main>
      
    </>
  );
}

export  {Main}
