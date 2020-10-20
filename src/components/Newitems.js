import React,{useEffect, useState} from 'react'
import styles from './newItems.module.css'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import axios from '../axios'
import categories from '../request'
// importing components
import MovieCard from './MovieCard'


const Newitems = () => {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get(categories.fetchTrending);
            setMovies(response.data.results);
            
            return response;
        }
        fetchData();
    },[]);
    // console.log(movies)
    return (
        <div className={styles.main} style={{zIndex:'-10'}}>
            <div className={styles.container}>
            <div className={styles.title}><h2><span>new items</span> of this season</h2><div className={styles.icons}><FiChevronLeft size={35}/><FiChevronRight size={35}/></div></div>
            <div className={styles.movies}>
                {movies.map((movie)=><MovieCard key={movie.id} large movie={movie}/>)}
            </div>
        </div>
        </div>
        
    )
}

export default Newitems
