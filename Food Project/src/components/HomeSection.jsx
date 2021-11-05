import React from 'react'
import { Link } from 'react-router-dom'
import homeImage from "../assets/image/home-img.png"
import homeParallax from "../assets/image/home-parallax-img.png"
const HomeSection = () => {
    return (
        <section className="home" id="home">

            <div className="content">
                <span>welcome foodies</span>
                <h3>different spices for the different tastes 😋</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde dolores temporibus hic quam debitis
                    tenetur harum nemo.</p>
                {/* eslint-disable-next-line */}
                <Link to="/order" className="btn">order now</Link>
            </div>

            <div className="image">
                <img src={homeImage} alt="" className="home-img" />
                <img src={homeParallax} alt="" className="home-parallax-img" />
            </div>

        </section>

    )
}

export default HomeSection
