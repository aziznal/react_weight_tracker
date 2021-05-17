import { Link } from 'react-router-dom'

import './aboutpage_styles.scss';

const AboutPage = () => {

    return (
        <div className="column about-page-container">
            <h2>
                Made by Abdulaziz Nal <a href="https://github.com/aziznal" target='blank'>@aziznal</a> as practice for react!
            </h2>

            <span>
                <strong>May - 2021</strong>
            </span>

            <div className="row">
                <Link className="btn" to='/' style={{color: "white"}} >Home</Link>
            </div>

        </div>
    )
}

export default AboutPage
