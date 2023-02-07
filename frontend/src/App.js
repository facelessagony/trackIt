import Signup from "./components/Signup";
import Signin from "./components/Signin";
import SignedIn from "./components/SignedIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/main" element={<SignedIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
