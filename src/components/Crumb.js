import React from 'react'
import styles from './crumb.module.css'
import {BsArrowRight} from 'react-icons/bs'

const Crumb = ({paths}) => {
    return (
        <div id="top" className={styles.mainCrumb}>
        <div className={styles.crumb}>
            <div className={styles.title}><h1>{paths[paths.length-1]}</h1></div>
            <div className={styles.location}>
                {paths.map(path=>{
                    return(
                    <>
                    <h4>{path} </h4>
                    <BsArrowRight className={styles.BsArrowRight}/>
                    </>
                    )
                })}
            </div>
        </div>
        </div>
    )
}

export default Crumb
