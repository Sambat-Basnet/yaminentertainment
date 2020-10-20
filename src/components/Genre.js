import React,{useState,useEffect} from 'react'
import styles from './genre.module.css'
import genres from '../request'
import axios from '../axios'
import MovieCard from '../components/MovieCard'
import {BiChevronRight} from 'react-icons/bi'

const Genre = () => {

    const[activeGenre,setActiveGenre] = useState('Action')
    const [genre,setGenre] = useState(genres.fetchAction);
    const[movies,setMovies] = useState([])
    

    useEffect(()=>{
        async function fetchData(){
        const response = await axios.get(genre);
        setMovies(response.data.results)
        return response}
        fetchData();
    },[genre])
    // console.log(activeGenre)
    return (
        <div className={styles.genSelect}>
            <div className={styles.genreContainer}>
                <div className={styles.genremain}>
            <ul>
                <li><h1 className={`${activeGenre=='Action' ? 'activeGenre': null}`}  onClick={(e)=>{
                    setActiveGenre('Action')
                    setGenre(genres.fetchAction)}}>Action</h1></li>
                <li><h1 className={`${activeGenre=='Comedy' ? 'activeGenre': null}`} onClick={(e)=>{
                    setActiveGenre('Comedy')
                    setGenre(genres.fetchComedy)}}>Comedy</h1></li>
                <li><h1 className={`${activeGenre=='Horror' ? 'activeGenre': null}`} onClick={(e)=>{
                    setActiveGenre('Horror')
                    setGenre(genres.fetchHorror)}}>Horror</h1></li>
                <li><h1 className={`${activeGenre=='Romance' ? 'activeGenre': null}`} onClick={(e)=>{
                    setActiveGenre('Romance')
                    setGenre(genres.fetchRomance)}}>Romance</h1></li>
                <li><h1 className={`${activeGenre=='Mystery' ? 'activeGenre': null}`} onClick={(e)=>{
                    setActiveGenre('Mystery')
                    setGenre(genres.fetchMystery)}}>Mystery</h1></li>
                <li><h1 className={`${activeGenre=='Sci-Fi' ? 'activeGenre': null}`} onClick={(e)=>{
                    setActiveGenre('Sci-Fi')
                    setGenre(genres.fetchScifi)}}>Sci-Fi</h1></li>
                <li><h1 className={`${activeGenre=='Western' ? 'activeGenre': null}`} onClick={(e)=>{
                    setActiveGenre('Western')
                    setGenre(genres.fetchWestern)}}>Western</h1></li>
                <li><h1 className={`${activeGenre=='Animation' ? 'activeGenre': null}`} onClick={(e)=>{
                    setActiveGenre('Animation')
                    setGenre(genres.fetchAnimation)}}>Animation</h1></li>
            </ul>
            <BiChevronRight className={styles.arrowRight}/>
            </div>
            </div>
        <div className={styles.genreMovie}>
        {movies.map(movie=>(
            <MovieCard key={movie.id} movie={movie}/>
        ))}
        </div>
        
        </div>
    )
}

export default Genre
