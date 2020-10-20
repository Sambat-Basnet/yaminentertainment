import React,{useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiLogIn} from 'react-icons/bi'
import Hamburger from 'hamburger-react'
import cx from 'classnames'
// importing styles
import styles from './nav.module.css'

const Nav = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className={styles.main}>
        <nav>
            <div className={styles.logo}>
                <h1><span>YAM</span>FLIX</h1>
            </div>
            <div className={styles.navItems}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/genres">Genres</a></li>
                    <li><a href="/pricing">Pricing plan</a></li>
                    <li><a href="/help">Help</a></li>
                </ul>
            </div>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search" />
                <a href="#"><AiOutlineSearch className={styles.login}/></a>
            </div>
        <button>Sign in</button>
        <div className={styles.loginIcon}>
            <a href="#"><BiLogIn/></a>
        </div>
        <div className={styles.hamburger}>
        <Hamburger size={'25'} toggled={isOpen} toggle={setOpen}/>
        </div>
        <div className={cx(styles.smallMenu,{[styles.smallMenuActive]:isOpen?true:false})} >
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/genres">genres</a></li>
                <li><a href="/pricing">pricing plan</a></li>
                <li><a href="/help">help</a></li>
            </ul>
        </div>
        
        </nav>
        <div className={cx(styles.overlay,{[styles.overlayActive]:isOpen?true:false})}>

        </div>
        
        </div>
    )
}

export default Nav
