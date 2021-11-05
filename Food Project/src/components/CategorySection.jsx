import React from 'react'
import img1 from "../assets/image/cat-1.png"
import img2 from "../assets/image/cat-2.png"
import img3 from "../assets/image/cat-3.png"
import img4 from "../assets/image/cat-4.png"
import img5 from "../assets/image/cat-5.png"
import img6 from "../assets/image/cat-6.png"

const CategorySection = () => {
    return (
        <section className="category">

            {/* eslint-disable-next-line */}
            <a href="#" className="box">
                <img src={img1} alt="" />
                <h3>combo</h3>
            </a>

            {/* eslint-disable-next-line */}
            <a href="#" className="box">
                <img src={img2} alt="" />
                <h3>pizza</h3>
            </a>

            {/* eslint-disable-next-line */}
            <a href="#" className="box">
                <img src={img3} alt="" />
                <h3>burger</h3>
            </a>

            {/* eslint-disable-next-line */}
            <a href="#" className="box">
                <img src={img4} alt="" />
                <h3>chicken</h3>
            </a>

            {/* eslint-disable-next-line */}
            <a href="#" className="box">
                <img src={img5} alt="" />
                <h3>dinner</h3>
            </a>

            {/* eslint-disable-next-line */}
            <a href="#" className="box">
                <img src={img6} alt="" />
                <h3>coffee</h3>
            </a>

        </section>
    )
}

export default CategorySection
