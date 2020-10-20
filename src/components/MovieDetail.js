import React,{useState} from 'react'
import styles from './movieDetail.module.css'
import {FiMoreHorizontal} from 'react-icons/fi'
import YouTube from 'react-youtube'


const MovieDetail = () => {

    const[index,setIndex] = useState(255);
    const[active,setActive] = useState(false);

    let description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, quam veritatis exercitationem laboriosam necessitatibus inventore debitis maxime quos doloremque. Aspernatur alias ratione minus consectetur velit molestiae perspiciatis aliquid? Iure, iustooloremque. Aspernatur alias ratione minus consectetur velit molestiae perspiciatis aliquid? Iure, iusto.oloremque. Aspernatur alias ratione minus consectetur velit molestiae perspiciatis aliquid? Iure, iusto.'


    return (
        <div className={styles.mainBack}>
            <div className={styles.detailSec}>
                <h1>The Shawshank Redemption</h1>
                <div className={styles.mainDetails}>
                <div className={styles.movieSec}>
                <div className={styles.poster}></div>
                <div className={styles.details}>
                    <h3>Director: Frank Darabont</h3>
                    <h3>Cast: <span>Tim Robbins, Morgan Freeman, Bob Gunton</span></h3>
                    <h3>Genre: <span>Drama/Crime</span></h3>
                    <h3>Release year: 1994</h3>
                    <h3>Running time: 142min</h3>
                    <h3>Country: <span>USA</span></h3>
    <p>{description.slice(0,index)}</p>
    <button onClick={()=>{
        if(active){
            setIndex(255)
            setActive(false)
        }else{
            setActive(true)
            setIndex(description.length)
        }
    }} className={styles.more}><FiMoreHorizontal/></button>
                </div>
                
                </div>
                <div className={styles.trailer}>
                <YouTube opts={{playerVars:{autoplay:1}}} videoId ="P9mwtI82k6E"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
