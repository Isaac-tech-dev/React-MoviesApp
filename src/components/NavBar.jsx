import React, { Fragment,useState } from 'react'
import {HiSearch} from 'react-icons/hi'
import { NavLink, Route, Routes } from 'react-router-dom'
import '../Styles/NavBarStyle.css'
import Trends from './Trends'
import Movies from './Movies'
import TVShow from './TVShow'
import Pricing from './Pricing'
import {HiOutlineFire} from 'react-icons/hi'
import {HiOutlineFilm} from 'react-icons/hi'


export const Container = React.createContext()

function NavBar(){
    const [toogle, setToogle] = useState(true)
    const {inputValue, setInputValue} = useState('')
  return (
    <Container.Provider value={{toogle, inputValue}}>
    <Fragment>
        <nav className={toogle ? '' : 'navBarcolor'}>
            <div className='nav-options'>

                <h1 id={toogle? '' : 'heading'}>MoviesHub</h1>
                <NavLink to="" style={({isActive}) => {return {color:isActive ? '#fff' : '#ee9800'}}}>
                <span id={toogle? 'Movies' : 'TrendingLight'}><HiOutlineFire fontSize={25}/>Trendings</span>
                </NavLink>
                <NavLink to="/Movies" style={({isActive}) => {return {color:isActive ? '#fff' : '#ee9800'}}}>
                <span id={toogle? 'Movies' : 'MoviesLight'}><HiOutlineFilm fontSize={25} id='Icon'/>Movies</span>
                </NavLink>
                <NavLink to="/TVShow" style={({isActive}) => {return {color:isActive ? '#fff' : '#ee9800'}}}>
                <span id={toogle? 'Movies' : 'MoviesLight'}>TV Series</span>
                </NavLink>
                {/* <NavLink to="/Pricing" style={({isActive}) => {return {color:isActive ? '#fff' : '#ee9800'}}}>
                <span id={toogle? 'Movies' : 'MoviesLight'}>Pricing</span>
                </NavLink> */}
            </div>
            <div className='input-group'>
            <input type="text" placeholder='Search' onChange={(e) => setInputValue(e.target.value)}/>
            <HiSearch fontSize={21} color="black" id='search'/>
            <div id='Color-switcher' onClick={() => setToogle(!toogle)}>
                <div id={toogle ? "Color-switcher-mover" : 'Color-switcher-moved'}></div>
            </div>
            </div>
        </nav>

        <Routes>
            <Route path='' element={<Trends/>}/>
            <Route path='Movies' element={<Movies/>}/>
            <Route path='TVShow' element={<TVShow/>}/>
            <Route path='Pricing' element={<Pricing/>}/>
        </Routes>
    </Fragment>
    </Container.Provider>
  )
}

export default NavBar