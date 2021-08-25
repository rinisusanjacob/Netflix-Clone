import React,{useEffect,useState} from 'react'
import { browserName, browserVersion } from "react-device-detect";
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {imgUrl,API_Key} from '../../constants/constants'
if(`${browserName}`=='Firefox'){
    var br=1;
}else if(`${browserName}`=='Chrome'){
    var br=2;
}
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, seturlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(err=>{
            alert('Network Error')

        })
        
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          
          autoplay: 1,
        },
      };
      const handlemovie =(id)=>{

        axios.get(`/movie/${id}/videos?api_key=${API_Key}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                seturlId(response.data.results[0])
            }
            else{
                console.log('Video not available')
            }
        })
      }
     
    return (
        <div className='row' >
            <h2>{props.title}</h2>

            <div className ={br==1 ?'posters' : 'postersc'}>
                {movies.map((obj)=>
                 <img onClick={()=>handlemovie(obj.id)} className={props.isSmall ? 'smallposter':'poster'} alt="poster" src={`${imgUrl+obj.backdrop_path}`}/>

                )}
            </div>
            
            
           { urlId && <YouTube opts={opts} videoId={urlId.key}/>}
            
        </div>
    )
}

export default RowPost
