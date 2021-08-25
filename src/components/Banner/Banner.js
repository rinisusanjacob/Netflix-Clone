import React,{useEffect, useState} from 'react'
import { browserName, browserVersion } from "react-device-detect";
import axios from '../../axios'
import {API_Key,imgUrl} from '../../constants/constants'
import './Banner.css'
var random=Math.floor((Math.random() * 19) + 1);
console.log(`${browserName} ${browserVersion}`);
if(`${browserName}`=='Firefox'){
    var b=1;
}else if(`${browserName}`=='Chrome'){
    var b=2;
}
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_Key}&language=en-US`).then((response)=>{
            
         setMovie(response.data.results[random])
        
        
    }, [])

    })
    return (
        <div 
       style={{backgroundImage:`url(${movie ? imgUrl+ movie.backdrop_path :""})`}}
        className={b==1 ?  'banner': 'bannerc'}>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title:""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview:""}</h1>
                
            </div>
            <div className='fade_bottom'>

            </div>
            
        
        
        </div>
    )
}

export default Banner
