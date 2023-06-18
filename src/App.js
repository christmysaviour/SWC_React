import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/NavBar/Navbar";
import Paul from "./Components/Paul/Paul";
import Sidebar from "./Components/Sidebar/Sidebar";
import Slider from "./Components/Slider/Slider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import movies from "./data/db";
import Single from "./Components/Individual/Single";
import { Provider } from 'react-redux';
import store from './Components/Redux/store';
function App() {

  return (
    <Provider store={store}>
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
      <Route path="movies/:id" element={
        <>
        <Navbar/>
        <Single  movies={movies}/>
        <Footer/>
        </>
      }/>
    </Routes>

    </BrowserRouter>
    </Provider>
  );
}

export default App;
