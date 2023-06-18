import React from 'react'
import { useParams } from 'react-router-dom';
import black from './black.png'
import white from './white.png'
import add from './add.png'
import './Single.css'
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../Redux/favouritesActions';
const Single = ({ movies }) => {

    const { id } = useParams(); // Retrieve the movie ID from the URL parameter
    const movie = movies.find(movie => movie.id === parseInt(id)); // Find the movie based on the ID
    
    const favorites = useSelector((state) => state.favorites.favorites);
    const dispatch = useDispatch();

    const isFavorite = favorites.some((favMovie) => favMovie.id === movie.id);

    const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };
  
    return (
        <div className="parent">
           <img src={movie.titleImg} className='title'/>
       <div className="paul-content">
            <div className="btn-play">
               <button className="play"><img src={black} className='btn'/>Play</button>
               <button className="trailer"><img src={white} className='btn'/>Trailer</button>
               <button onClick={handleFavoriteClick} className='favourites_button'>
            {isFavorite ? '-' : '+'}
            </button>
            </div>
            <div className='description'>
            <br/>
            <h3>{movie.subTitle}</h3>
            <br/>
            <h3>{movie.description}</h3>
            <br/>
          
            {/* Luke, pens a revolutionary book that leads to the birth of the church. */}
            </div>
           
       </div>
       <div className='Paul'>
        <img src={movie.backgroundImg} alt="paul"/>
       </div>
   
       </div>
    );
  };

export default Single