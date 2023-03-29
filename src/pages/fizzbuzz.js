import React, { useState } from "react";
import NewNavbar from "../components/Navbar";
import NumList from '../components/NumList/index.js'
import TextFieldGrid from "../components/TextFieldGrid";
import RunButton from "../components/RunButton";
import InputAlert from "../components/InputAlert";
import FizzBuzzTextField from "../components/FizzBuzzTextField";
import { validateInput } from "../functions/integerCheck";
import logo from '../media/logo-inovate-solutions.png'

const FizzBuzz = () => {
    const [input, setInput] = useState('');
    const [divisor1, setDivisor1] = useState(3);
    const [divisor2, setDivisor2] = useState(5);
    const [integerCheck, setIntegerCheck] = useState();
    const [fizzArray] = useState([]);
    const [fizz, setFizz] = useState("fizz")
    const [buzz, setBuzz] = useState("buzz")
    const [fizzListReady, setFizzListReady] = useState()

    const handleChange1 = (event) => {
        const { value } = event.target;
        setInput(value);
        setIntegerCheck(validateInput(value));
      };
    
    const handleChange2 = (event) => {
        const { value } = event.target;
        setDivisor1(value);
        setIntegerCheck(validateInput(value));
      };
    
    const handleChange3 = (event) => {
        const { value } = event.target;
        setDivisor2(value);
        setIntegerCheck(validateInput(value));
      };
     
    const handleChange4 = (event) => {
        setFizz(event.target.value);
      };
    
    const handleChange5 = (event) => {
        setBuzz(event.target.value);
      };


      // considering how much state this function uses, I am keeping it inside of the fizzbuzz page file
    const runFizzBuzz = () => {
        for (let i = 1; i <= input; i++) {
            if (i % divisor1 == 0 && i % divisor2 == 0) {
                fizzArray[i] = fizz.concat(buzz);
            } else if (i % divisor1 == 0) {
                fizzArray[i] = fizz;
            }  else if (i % divisor2 == 0) {
                fizzArray[i] = buzz;
            }  else {
                fizzArray[i] = i
            }
        }
        fizzArray.shift();
        setFizzListReady(1);
      }

  return (
    <div>
      <NewNavbar />
        <br/>
        <br/>
        <h1>FizzBuzz</h1>
        <br/>
        <TextFieldGrid
            input={input}
            handleChange1={handleChange1}
            divisor1={divisor1}
            handleChange2={handleChange2}
            divisor2={divisor2}
            handleChange3={handleChange3}
            label1={"Length"}
            label2={"Divisor-1"}
            label3={"Divisor-2"}
        />
        <br/>
        <FizzBuzzTextField
            fizz={fizz}
            buzz={buzz}
            handleChange4={handleChange4}
            handleChange5={handleChange5}
        />
        <br/>
        <br/>
        <RunButton runProgramMsg={"Run FizzBuzz"} runProgram={runFizzBuzz}/>
        {integerCheck && <InputAlert/>}
        {fizzListReady && <NumList items={fizzArray}/>}
        <img src={logo} className="logo" alt="logo" />
    </div>
  );
};
  
export default FizzBuzz;