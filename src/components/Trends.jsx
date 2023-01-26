import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import { Container } from './NavBar'
import NoImg from './2.jpg'
import '../Styles/Videos.css'

function Trends() {
  const {toogle} = useContext(Container)
  const Api = `https://api.themoviedb.org/3/`
  const TrendsShow = '/trending/all/week?sort_by=popularity.desc&'
  const [trailer, setTrailer] = useState(true)
  const [trendsArray, setTrendsArray] = useState([])
  const [trendTitle, setTrendTitle] = useState('')
  const Images = 'https://image.tmdb.org/t/p/w500/'
  const Trends = async() => {
    const data = await axios.get(`${Api}${TrendsShow}`, {
      params: {
        api_key: 'e49d3f7ecd75bedcaa3e52a2c6ac0b76',
      }
    })
    const results = data.data.results
    setTrendsArray(results)
  }

  useEffect(() => {
    setTimeout(() => {
      Trends()
    },300)
  },[])
  const TrendTitle = (trend) =>{
    setTrendTitle(trend.title)
    setTrailer(!trailer)
  }
  console.log(trendsArray)
  return (
    <Fragment>
      <div className={toogle ? "mainBgColor" : 'secondaryBgColor'}>
      <div className='movies-container'>
        {trendsArray.map((trend) => {
          return(
            <Fragment>
              <div id={trailer ? 'container' : 'NoContainer'}>
              <AiFillPlayCircle color='#fff' fontSize={30} id={trailer ? "playIcon" : "hide"} onClick={() => TrendTitle(trend)}/>
              <img src={trend.poster_path ? `${Images}${trend.poster_path}` : NoImg} alt='' onClick={() => TrendTitle(trend)}/>
              <h3 id='smaller-Text' className={toogle ? 'mainColor' : 'secondaryColor'}>{trend.title}</h3>
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

export default Trends