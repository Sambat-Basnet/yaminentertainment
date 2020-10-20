import React,{useState,useEffect} from 'react'
import styles from './expected.module.css'
import genres from '../request'
import axios from '../axios'
import MovieCard from './MovieCard'

const Expected = () => {

    const [films,setFilms] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get(genres.fetchTrending)
            setFilms(response.data.results)
            return response
        }
        fetchData();
    },[])

    // console.log(films)

    return (
        <div className={styles.mainExpected}>
            <div className={styles.prem}>
                <div className={styles.expectTitle}>
                <h1>Expected premiere</h1>
                </div>
                <div className={styles.expectMovie}>
                {films.map(film=><MovieCard large key={film.id} movie={film}/>)}
                </div>
            </div>
        </div>
    )
}

export default Expected
