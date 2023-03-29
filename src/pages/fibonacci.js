import React, { useState } from "react";
import NewNavbar from "../components/Navbar";
import TextFieldGrid from "../components/TextFieldGrid";
import RunButton from "../components/RunButton";
import NumList from "../components/NumList";
import InputAlert from "../components/InputAlert";
import { validateInput } from "../functions/integerCheck";
import logo from '../media/logo-inovate-solutions.png'

const Fibonacci = () => {
    const [input, setInput] = useState('');
    const [x, setX] = useState(2)
    const [z, setZ] = useState(1)
    const [fibArray, setFibArray] = useState([]);
    const [integerCheck, setIntegerCheck] = useState();
    const [fibListReady, setFibListReady] = useState()

    const handleChange = (event) => {
        const { value } = event.target;
        setInput(value);
        setIntegerCheck(validateInput(value));
    };

    const handleChange1 = (event) => {
        const { value } = event.target;
        setX(value);
        setIntegerCheck(validateInput(value));
    };

    const handleChange2 = (event) => {
        const { value } = event.target;
        setZ(value);
        setIntegerCheck(validateInput(value));
    };

    const runFibonacci = () => {
        if (isNaN(input) || parseInt(input) == 0) {
            setIntegerCheck(1)
            return
        }
        setIntegerCheck()

        let fib = [0, 1];
        let i = 0;
        for (i = 2; i <= input; i++) {
            if (isNaN(fib[i - x]) || isNaN(fib[i - z]) == 1) {
                fib[i] = 1;
            } else {
                fib[i] = fib[i - x] + fib[i - z];
            }
        }
        setFibListReady(1)
        fib.shift();
        setFibArray(fib)
    }

    return (
        <div>
            <NewNavbar />
            <br />
            <br />
            <h1>Fibonacci</h1>
            <br />
            <TextFieldGrid
                input={input}
                handleChange1={handleChange}
                divisor1={x}
                handleChange2={handleChange1}
                divisor2={z}
                handleChange3={handleChange2}
                label1={"Length"}
                label2={"X"}
                label3={"Z"}
            />
            <br />
            <RunButton runProgramMsg={"Run Fibonacci"} runProgram={runFibonacci} />
            {fibListReady && <NumList items={fibArray} />}
            {integerCheck && <InputAlert />}
            <br />
            <img src={logo} className="logo" alt="logo" />
        </div>
    );
};

export default Fibonacci;