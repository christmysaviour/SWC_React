import React,{useState} from 'react'
import './Home.css'
import Single from '../Individual/Single';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Home = ({movies}) => {
    const [isHovered, setIsHovered] = useState(null);

    const handleMouseEnter = (id) => {
      setIsHovered(id);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(null);
    };



    const favorites = useSelector((state) => state.favorites.favorites);
    
  
  
  return (
    <div className='home'>
    <div className="favouite">
      {favorites.length > 0 ? (
        <>
         <h2>Favourites</h2>
        <div className='recommended'>
          {favorites.map((movie) => { 
            return (
                <div className="movie-items" key={movie.id}>
                <Link to ={`/movies/${movie.id}`}>
                <img
                  src={movie.cardImg}                  
                />
                </Link>
              </div>
            )})}
        </div>
        </>
      ) : (
        <></>
      )}
    </div>
    <h2>Recommended Movies</h2>
    <div className="recommended">
    
        {movies.filter((movie)=>movie.type==='recommend').map((movie)=>{
            return (
                <div className="movie-items" key={movie.id}>
                <Link to ={`/movies/${movie.id}`}>
                <img
                  src={movie.cardImg}
                  onMouseEnter={() => handleMouseEnter(movie.id)}
                  onMouseLeave={handleMouseLeave}
                  
                />
                </Link>
                {isHovered === movie.id && (
                  <div className="overlay">
                    <p>{movie.description}</p>
                  </div>
                )}
              </div>
            )
        })}
    </div>
    <h2>Trending Movies</h2>
    <div className="recommended">
        {movies.filter((movie)=>movie.type==='trending').map((movie)=>{
            return (
              <div className="movie-items" key={movie.id}>
             <Link to ={`/movies/${movie.id}`}>
                <img
                  src={movie.cardImg}
                  onMouseEnter={() => handleMouseEnter(movie.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={()=>{}}
                />
                </Link>

              {isHovered === movie.id && (
                <div className="overlay">
                  <p>{movie.description}</p>
                </div>
              )}
            </div>
            )
        })}
    </div>  
    <h2>New Movies</h2>
    <div className="recommended">
        {movies.filter((movie)=>movie.type==='new').map((movie)=>{
            return (
              <div className="movie-items" key={movie.id}>
              <Link to ={`/movies/${movie.id}`}>
                <img
                  src={movie.cardImg}
                  onMouseEnter={() => handleMouseEnter(movie.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={()=>{}}
                />
                </Link>

              {isHovered === movie.id && (
                <div className="overlay">
                  <p>{movie.description}</p>
                </div>
              )}
            </div>
            )
        })}
    </div>  
    <h2>Original Movies</h2>
    <div className="recommended">
        {movies.filter((movie)=>movie.type==='original').map((movie)=>{
            return (
              <div className="movie-items" key={movie.id}>
             <Link to ={`/movies/${movie.id}`}>
                <img
                  src={movie.cardImg}
                  onMouseEnter={() => handleMouseEnter(movie.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={()=>{}}
                />
                </Link>

              {isHovered === movie.id && (
                <div className="overlay">
                  <p>{movie.description}</p>
                </div>
              )}
            </div>
            )
        })}
    </div>  
    </div>
  )
}

export default Home