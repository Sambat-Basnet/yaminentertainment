import React,{useEffect,useState} from 'react'
import styles from './secnewitems.module.css'
import axios from '../axios'
import categories from '../request'

import MovieCard from './MovieCard'

const SecNewItems = () => {

    const[activeGenre,setActiveGenre] = useState('top rated') 
    const[selectCat, setSelectCat] = useState(categories.fetchTopRated)
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get(selectCat)
            setMovies(response.data.results)
            return response
        }
        fetchData();
    },[selectCat])
    console.log(movies)
    return (
        <div className={styles.head}>
            <div className={styles.total}>
            <div className={styles.lower}>
            <div className={styles.overall}>
            <h1>New items</h1>
            <div className={styles.movieDetails}>
                <ul><li className={`${activeGenre=='top rated' ? 'activeGenre': null}`} onClick={()=>{
                    setActiveGenre('top rated')
                    setSelectCat(categories.fetchTopRated)}}>top rated</li>
                <li className={`${activeGenre=='movies' ? 'activeGenre': null}`} onClick={()=>{
                    setActiveGenre('movies')
                    setSelectCat(categories.fetchMovies)}}>movies</li>
                <li className={`${activeGenre=='tv series' ? 'activeGenre': null}`} onClick={()=>{
                    setActiveGenre('tv series')
                    setSelectCat(categories.fetchTV)}}>tv series</li></ul>
                </div>
                </div>
                </div>
                <div className={styles.movieLists}>
                    {movies.map(movie=><MovieCard key={movie.id} movie={movie} />)}
                    
                    </div>
</div>
            
        </div>
    )
}

export default SecNewItems
