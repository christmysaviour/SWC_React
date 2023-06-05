import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/NavBar/Navbar";
import Paul from "./Components/Paul/Paul";
import Sidebar from "./Components/Sidebar/Sidebar";
import Slider from "./Components/Slider/Slider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import movies from "./data/db";

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/home' element={
       <div className="App">
        <Navbar/>
        <div className="main-content">
        <Sidebar/>
        <div>
        <Slider/>
        {movies&&<Home movies={movies}/> }
        </div>
        </div>
       <Footer/>
    </div>
      }/>
      <Route path="/home/movie" element={
      <>
      <Navbar/>
      <Paul/>
      <Footer/>
      </>
    }
      />
    </Routes>

    </BrowserRouter>
  );
}

export default App;

