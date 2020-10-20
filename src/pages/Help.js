import React from 'react'
import styles from '../components/help.module.css'
//importing components
import Nav from '../components/Nav'
import Crumb from '../components/Crumb'
import Footer from '../components/Footer'

const Help = () => {
    return (
        <div className={styles.helpSec}>
            <Nav/>
            <Crumb paths={['Home','FAQ']}/>
            <div className={styles.questionSec}>
                <div className={styles.questions}>
                    <div className={styles.helpSections}>
                        <div className={styles.first}>
                        <h2>Why is a Video is not loading?</h2>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                        <div className={styles.second}>
                        <h2>Why isn't the video starting at the beginning?</h2>
                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                    </div>
                    <div className={styles.helpSections}>
                        <div className={styles.first}>
                        <h2>Why is the Video stuttering, buffering or randomly stopping?</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                        <div className={styles.second}>
                        <h2>How do you handle my privacy?</h2>
                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                    </div>
                    <div className={styles.helpSections}>
                        <div className={styles.first}>
                        <h2>Why isn't there a HD version of this video?</h2>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                        </div>
                        <div className={styles.second}>
                        <h2>How do I make the Video go Fullscreen?</h2>
                        <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </div>
                    <div className={styles.helpSections}>
                        <div className={styles.first}>
                        <h2>Why is the sound distorted?</h2>
                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                        <div className={styles.second}>
                        <h2>What Browsers are supported?</h2>
                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div className={styles.helpSections}>
                        <div className={styles.first}>
                        <h2>When I change the quality of a video, nothing happens.</h2>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                        <div className={styles.second}>
                        <h2>How can I contact you?</h2>
                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Help
