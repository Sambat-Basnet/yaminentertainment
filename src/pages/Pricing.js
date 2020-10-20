import React from 'react'
import styles from '../components/pricing.module.css'
import {FiMonitor} from 'react-icons/fi'
import {IoIosFilm,IoIosRocket,IoIosGlobe} from 'react-icons/io'
import {ImTrophy} from 'react-icons/im'
import {AiTwotoneBell} from 'react-icons/ai'
import {BiCheck} from 'react-icons/bi'
//importing components
import Nav from '../components/Nav'
import Crumb from '../components/Crumb'
import Footer from '../components/Footer'

const Pricing = () => {
    return (
        <div className={styles.pricingBody}>
            <Nav/>
            <Crumb paths={['Home','Pricing']}/>
            <div className={styles.pricingContainer}>

                <div className={styles.mainPricing}>
                    <div className={styles.offerSec}>
                        <div className={styles.offerRow}>
                            <div className={styles.offerItem}>
                                <BiCheck className={styles.checkIcon}/>
                                <h3>1 month unlimited access!</h3>
                                
                            </div>
                            <div className={styles.offerItem}>
                            <BiCheck className={styles.checkIcon}/>
                                <h3>Stream on your phone, laptop, tablet or TV.</h3>
                            </div>
                            <div className={styles.offerItem}>
                            <BiCheck className={styles.checkIcon}/>
                                <h3>1 month unlimited access!</h3>
                            </div>
                        </div>
                        <div className={styles.offerRow}>
                            <div className={styles.offerItem}>
                            <BiCheck className={styles.checkIcon}/>
                                <h3>Thousands of TV shows, movies & more.</h3>
                            </div>
                            <div className={styles.offerItem}>
                            <BiCheck className={styles.checkIcon}/>
                                <h3>You can even Download & watch offline.</h3>
                            </div>
                            <div className={styles.offerItem}>
                            <BiCheck className={styles.checkIcon}/>
                                <h3>Thousands of TV shows, movies & more.</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.priceSec}>
                        <div className={styles.priceItem}>
                            <div className={styles.priceHead}>
                                <h2>Basic</h2>
                                <h2 className={styles.free}>Free</h2>
                            </div>
                            <div className={styles.priceList}>
                            <ul>
                                    <li>7 days</li>
                                    <li>720p Resolution</li>
                                    <li>Limited Availability</li>
                                    <li>Desktop Only</li>
                                    <li>Limited Support</li>
                                </ul>
                                <button>choose plan</button>
                            </div>
                        </div>
                        <div className={styles.priceItem}>
                        <div className={styles.priceHead}>
                                <h2>Premium</h2>
                                <h2 className={styles.premium} >$19.99</h2>
                        </div>
                            <div className={styles.priceList}>
                                <ul className={styles.premiumColor}>
                                    <li>1 Month</li>
                                    <li>Full HD</li>
                                    <li>Lifetime Availability</li>
                                    <li>TV & Desktop</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <button className={styles.premiumBtn}>choose plan</button>
                            </div>
                        </div>
                        <div className={styles.priceItem}>
                        <div className={styles.priceHead}>
                                <h2>Cinematic</h2>
                                <h2 className={styles.cinematic}>$39.99</h2>
                        </div>
                            <div className={styles.priceList}>
                            <ul>
                                    <li>2 Months</li>
                                    <li>Ultra HD</li>
                                    <li>Lifetime Availability</li>
                                    <li>Any Device</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <button>choose plan</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.featureContainer}>
                <div className={styles.featureSec}>
                    <div className={styles.featureTitle}><h1>Our Features</h1></div>
                    <div className={styles.featureItems}>
                        <div className={styles.row}>
                            <div className={styles.items}>
                                <div className={styles.itemLogo}>
                                    <FiMonitor/>
                                </div>
                                <div className={styles.itemContent}>
                                    <h2>Ultra HD</h2>
                                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                </div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.itemLogo}>
                                    <IoIosFilm/>
                                </div>
                                <div className={styles.itemContent}>
                                    <h2>Film</h2>
                                    <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first.</p>
                                </div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.itemLogo}>
                                    <ImTrophy/>
                                </div>
                                <div className={styles.itemContent}>
                                    <h2>Awards</h2>
                                    <p>It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.row}>
                        <div className={styles.items}>
                                <div className={styles.itemLogo}>
                                <AiTwotoneBell/>
                                </div>
                                <div className={styles.itemContent}>
                                    <h2>Notifications</h2>
                                    <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                                </div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.itemLogo}>
                                    <IoIosRocket/>
                                </div>
                                <div className={styles.itemContent}>
                                    <h2>Rocket</h2>
                                    <p>It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                                </div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.itemLogo}>
                                <IoIosGlobe/>
                                </div>
                                <div className={styles.itemContent}>
                                    <h2>Multi Language Subtitles</h2>
                                    <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.partnerContainer}>
                <div className={styles.partnerSec}>
                    <div className={styles.partnerTitle}>
                        <h1>Our Partners</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                    </div>
                    <div className={styles.partnerIcon}>
                        <div className={styles.brandRow}>
                        <img height='70px' src="/assets/hulu.png" alt="logo"/>
                        <img height='78px' src="/assets/paramount2.png" alt="logo"/>
                        <img height='120px' src="/assets/netflix.png" alt="logo"/>
                        </div>
                        <div className={styles.brandRow}>
                        <img height='80px' src="/assets/warnerbros.png" alt="logo"/>
                        <img height='30px' src="/assets/hbo.png" alt="logo"/>
                        <img height='90px' src="/assets/amazon.png" alt="logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Pricing
