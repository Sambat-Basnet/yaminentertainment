import React from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import styles from './movieCard.module.css'
import cx from 'classnames'
import TextTruncate from 'react-text-truncate'
import {useHistory} from 'react-router-dom'

const MovieCard = ({large,movie,...restprops}) => {

    // console.log(typeof movie.vote_average)
    const baseImgUrl = "https://image.tmdb.org/t/p/original/";
    const history = useHistory()

    return (
        <div {...restprops} className={cx(styles.movieCard,{[styles.movieCardLarge]:large?true:false})}>
                <img  src={baseImgUrl+movie?.backdrop_path} alt="wwz"/>
                <h4 className={cx(styles.rating,{[styles.movieRatingLow]:movie?.vote_average<6?true:false})}>{movie?.vote_average}</h4>
            <AiFillPlayCircle onClick={()=>{
                history.push('/movie')
            }} color={'white'} size={66} className={styles.playBtn}/>
            <div className={styles.desc}>
            <TextTruncate line={1} element="h3" truncateText="..." text={ movie?.title ||movie?.original_title || movie?.original_name}/>
    <h4 className={styles.media}>{movie?.media_type}</h4>
            </div>
        </div>
    )
}

export default MovieCard
