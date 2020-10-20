import React from 'react'
import styles from './footer.module.css'
import {BsArrowUp} from 'react-icons/bs'

const Footer = () => {
    return (
        <div className={styles.mainFoot}>
        <div className={styles.FootSec}>
            <div className={styles.mainPart}>
            <div className={styles.logoSec}>
                <div className={styles.yamflix}>
                <h1><span>yam</span>flix</h1>
                </div>
                <div className={styles.copyright}><h4>&#169;2020 YamFlix</h4>
            <h4>Created by Yam</h4>
                </div>
            </div>
            <div className={styles.linkSec}>
                <div className={styles.lists}>
                <ul><li><a href="#">AboutUs</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">PrivacyPolicy</a></li></ul>
                </div>
                </div>
            </div>
            <BsArrowUp size={'30'}/>
        </div>
        </div>
    )
}

export default Footer
