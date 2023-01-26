import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import { Container } from './NavBar'
import NoImg from './2.jpg'
import '../Styles/Videos.css'


const Movies = () => {
  const {toogle, inputValue} = useContext(Container)
  const input = inputValue
  const [moviesData, setMoviesData] = useState([])
  const [trailer, setTrailer] = useState(true)
  const [movieTitle, setMovieTitle] = useState('')
  const Shown = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`
  const Images = 'https://image.tmdb.org/t/p/w500/'
  const MovieCall = async () => {
    const data = await axios.get(Api,{
      params:{
        api_key: 'e49d3f7ecd75bedcaa3e52a2c6ac0b76',
        query: input
      }
    })
    const results = data.data.results
    setMoviesData(results)
  }
  useEffect(() => {
    setTimeout(() =>{
      MovieCall()
    }, 300)
  }, [input])
  const MoviesTitle = (movie) =>{
    setMovieTitle(movie.title)
    setTrailer(!trailer)
  }
  console.log(moviesData)
  return (
    <Fragment>
      <div className={toogle ? "mainBgColor" : 'secondaryBgColor'}>
      <div className='movies-container'>
      {moviesData.map((movie) =>  {
        return(
          <Fragment>
          <div id={trailer ? 'container' : 'NoContainer'}>
            <AiFillPlayCircle color='#fff' fontSize={30} id={trailer ? "playIcon" : "hide"} onClick={() => MoviesTitle(movie)}/>
            <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt='' onClick={() => MoviesTitle(movie)}/>
            <h3 id={movie.title.length > 28 ? 'smaller-Text' : ''} className={toogle ? 'mainColor' : 'secondaryColor'}>{movie.title}</h3>
          </div>
        </Fragment> 
        )
      })}
      <AiOutlineClose id ={toogle ? 'Nothing' : 'Exit1'} className={toogle ? 'DarkTheme' : 'LightThemeClose'} onClick={() => setTrailer(true)} />
      </div>
      </div>
    </Fragment>
  )
}

export default Movies