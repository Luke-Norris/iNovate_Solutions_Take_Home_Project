import React from "react";
import NewNavbar from "../components/Navbar";
import logo from '../media/logo-inovate-solutions.png'
import FizzBuzzCard from "../FizzBuzzCard";
import FizzbonacciCard from "../components/FizzbonacciCard";
import FibonacciCard from "../components/FibonacciCard";

const Home = () => {
  return (
    <div>
      <NewNavbar/>
      <br/>
      <br/>
      <h1 className="center">
        iNovate Solution's Take Home Project
      </h1>
      <br/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ margin: '10px' }}>
          <FizzBuzzCard/>
        </div>
        <div style={{ margin: '10px' }}>
          <FibonacciCard/>
        </div>
        <div style={{ margin: '10px' }}>
          <FizzbonacciCard/>
        </div>
      </div>
      <br/>
      <img src={logo} className="logo" alt="logo" />

    </div>
  );
};
  
export default Home;