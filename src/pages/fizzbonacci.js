import React, { useState } from "react";
import NewNavbar from "../components/Navbar";
import TextFieldGrid from "../components/TextFieldGrid";
import FizzbonacciInput from "../components/FizzbonacciInput";
import RunButton from "../components/RunButton";
import InputAlert from "../components/InputAlert";
import NumList from "../components/NumList";
import { validateInput } from "../functions/integerCheck";
import logo from '../media/logo-inovate-solutions.png'

const Fizzbonacci = () => {
  const [input, setInput] = useState('');
  const [fizz, setFizz] = useState("fizz")
  const [buzz, setBuzz] = useState("buzz")
  const [divisor1, setDivisor1] = useState(3);
  const [divisor2, setDivisor2] = useState(5);
  const [x, setX] = useState(2)
  const [z, setZ] = useState(1)
  const [fizzbonacciArray, setFizzbonacciArray] = useState([]);
  const [fizzbonacciListReady, setFizzbonacciListReady] = useState()
  const [integerCheck, setIntegerCheck] = useState();

  const handleChange1 = (event) => {
    const { value } = event.target;
    setFizz(value);
    setFizzbonacciListReady()

  };

  const handleChange2 = (event) => {
    const { value } = event.target;
    setDivisor1(value);
    setIntegerCheck(validateInput(value));
    setFizzbonacciListReady()

  };

  const handleChange3 = (event) => {
    const { value } = event.target;
    setX(value);
    setIntegerCheck(validateInput(value));
    setFizzbonacciListReady()

  };

  const handleChange4 = (event) => {
    const { value } = event.target;
    setBuzz(value);
    setFizzbonacciListReady()

  };

  const handleChange5 = (event) => {
    const { value } = event.target;
    setDivisor2(value);
    setIntegerCheck(validateInput(value));
    setFizzbonacciListReady()

  };

  const handleChange6 = (event) => {
    const { value } = event.target;
    setZ(value);
    setIntegerCheck(validateInput(value));
    setFizzbonacciListReady()

  };

  const handleChange7 = (event) => {
    const { value } = event.target;
    setInput(value);
    setIntegerCheck(validateInput(value));
    setFizzbonacciListReady()

  };


  const runFizzbonacci = () => {
    if (Number.isInteger(parseInt(input)) == 0 || Number.isInteger(parseInt(x)) == 0 || Number.isInteger(parseInt(z)) == 0 || Number.isInteger(parseInt(divisor1)) == 0 || Number.isInteger(parseInt(divisor2)) == 0) {
      setIntegerCheck(1)
      return
    }

    // fibonacci portion
    fizzbonacciArray[0] = 0;
    fizzbonacciArray[1] = 1;
    setIntegerCheck(0)
    for (let i = 2; i <= input; i++) {
      if (isNaN(fizzbonacciArray[i - x]) || isNaN(fizzbonacciArray[i - z]) == 1) {
        fizzbonacciArray[i] = 1

      } else {
        fizzbonacciArray[i] = fizzbonacciArray[i - x] + fizzbonacciArray[i - z];
      }// F(x)=F(x-y)+F(x-z)
    }
    fizzbonacciArray.shift(); // getting rid of the first 0 (as wanted in project pdf)

    // fizzbuzz portion
    for (let i = 0; i < fizzbonacciArray.length; i++) {
      if (fizzbonacciArray[i] % divisor1 == 0 && fizzbonacciArray[i] % divisor2 == 0) {
        fizzbonacciArray[i] = fizz.concat(buzz);
      } else if (fizzbonacciArray[i] % divisor1 == 0) {
        fizzbonacciArray[i] = fizz;
      } else if (fizzbonacciArray[i] % divisor2 == 0) {
        fizzbonacciArray[i] = buzz;
      } else {
        console.log('skip')
      }
    }
    console.log(fizzbonacciArray)
    setFizzbonacciListReady(1)
  }


  return (
    <div>
      <NewNavbar />
      <br />
      <h1>
        Fizzbonacci
      </h1>
      <br />
      <FizzbonacciInput input={input} handleChange1={handleChange7} label1={"Length"} />
      <br />
      <TextFieldGrid
        input={fizz}
        handleChange1={handleChange1}
        divisor1={divisor1}
        handleChange2={handleChange2}
        divisor2={x}
        handleChange3={handleChange3}
        label1={"Divisor-1 Word"}
        label2={"Divisor-1"}
        label3={"x"}
      />
      <br />
      <TextFieldGrid
        input={buzz}
        handleChange1={handleChange4}
        divisor1={divisor2}
        handleChange2={handleChange5}
        divisor2={z}
        handleChange3={handleChange6}
        label1={"Divisor-2 Word"}
        label2={"Divisor-2"}
        label3={"z"}
      />
      <br />
      <RunButton runProgramMsg={"Run Fizzbonacci"} runProgram={runFizzbonacci} />
      {integerCheck && <InputAlert />}
      {fizzbonacciListReady && <NumList items={fizzbonacciArray} />}
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
};

export default Fizzbonacci;