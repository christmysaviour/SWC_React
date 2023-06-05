import React,{useState} from 'react'
import './Home.css'
const Home = ({movies}) => {
    const [isHovered, setIsHovered] = useState(null);

    const handleMouseEnter = (id) => {
      setIsHovered(id);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(null);
    };
 

  return (
    <div className='home'>
    <h2>Recommended For You</h2>
    <div className="recommended">
        {movies.filter((movie)=>movie.type==='recommend').map((movie)=>{
            return (
                <div className="movie-items" key={movie.id}>
                <img
                  src={movie.cardImg}
                  onMouseEnter={() => handleMouseEnter(movie.id)}
                  onMouseLeave={handleMouseLeave}
                />
  
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
              <img
                src={movie.cardImg}
                onMouseEnter={() => handleMouseEnter(movie.id)}
                onMouseLeave={handleMouseLeave}
              />

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
              <img
                src={movie.cardImg}
                onMouseEnter={() => handleMouseEnter(movie.id)}
                onMouseLeave={handleMouseLeave}
              />

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
              <img
                src={movie.cardImg}
                onMouseEnter={() => handleMouseEnter(movie.id)}
                onMouseLeave={handleMouseLeave}
              />

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