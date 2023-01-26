import axios from 'axios'
import React, {Fragment, useContext, useEffect, useState} from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import { Container } from './NavBar'
import NoImg from './2.jpg'
import '../Styles/Videos.css'

function TVShow() {
  const {toogle, inputValue} = useContext(Container)
  const [showData, setShowData] = useState([])
  const [trailer, setTrailer] = useState(true)
  const [title,setTitle] = useState('')
  const Api = "https://api.themoviedb.org/3/discover/tv"
  const Images = 'https://image.tmdb.org/t/p/w500/'
  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: 'e49d3f7ecd75bedcaa3e52a2c6ac0b76',
      }
    })
    const results = (data.data.results)
    setShowData(results)
  }
  useEffect(() => {
    setTimeout(() => {
      TvShows()
    }, 300)
  },[])
  console.log(showData)
  const TvShowTitle = (shows) => {
    setTitle(shows.name)
    setTrailer(!trailer)
  }
  return (
    <Fragment>
      <div className={toogle ? "mainBgColor" : 'secondaryBgColor'}>
      <div className='movies-container'>
      {showData.map((shows)=>{
        return(
          <Fragment key={shows.id}>
            <div id={trailer ? 'container' : 'NoContainer'}>
            <AiFillPlayCircle color='#fff' fontSize={30} id={trailer ? 'playIcon' : 'hide'} onClick={() => TvShowTitle(shows)}/>
            <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoImg} alt='' onClick={() => TvShowTitle(shows)}/>
            <h3 id={shows.name.length >28 ? 'smaller-Text' : ''} className={toogle ? 'mainColor' : 'secondaryColor'}>{shows.name}</h3>
            </div>
          </Fragment>
        )
      })}
      </div>
    </div>
      <AiOutlineClose id ={trailer ? 'Exit1' : 'Nothing'} className={toogle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} color="#fff" cursor={'pointer'} onClick={() => setTrailer(true)} />
    </Fragment>
    
  )
}

export default TVShow