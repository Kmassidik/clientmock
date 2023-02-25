import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TestFetch, Login, Register, Home } from "./Pages";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/test" element={<TestFetch />} />
        </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
