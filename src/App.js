import logo from './logo.svg';
import './App.css';
import FizzBuzz from './pages/fizzbuzz';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Fibonacci from './pages/fibonacci';
import Fizzbonacci from './pages/fizzbonacci';

function App() {
  return (
    // How many, And which pages should this webapp contain?
    // Probably about 4
    // 1. Home page
    //    - This will have the selection to where you can choose either
    //        1. FizzBuzz
    //        2. Fibonacci
    //        3. Fizzbonacci
    // 2. Fizzbuzz
    // 3. Fibonacci
    // 4. Fizzbonacci
    <Router>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/fizzbuzz' element={<FizzBuzz/>} />
          <Route path='/fibonacci' element={<Fibonacci/>} />
          <Route path='/fizzbonacci' element={<Fizzbonacci/>} />
      </Routes>
    </Router>
  );
}

export default App;
