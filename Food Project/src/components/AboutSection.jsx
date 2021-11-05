import aboutImage from '../assets/image/about-img.png'
import serv1 from '../assets/image/serv-1.png'
import serv2 from '../assets/image/serv-2.png'
import serv3 from '../assets/image/serv-3.png'
import serv4 from '../assets/image/serv-4.png'

// "image/serv-2.png"
// "image/serv-3.png"
// "image/serv-4.png"

const AboutSection = () => {
    return (
        <section className="about" id="about">

            <div className="image">
                <img src={aboutImage} alt="" />
            </div>

            <div className="content">
                <span>why choose us?</span>
                <h3 className="title">what's make our food delicious!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut explicabo, numquam iusto est a ipsum
                    assumenda tempore esse corporis?</p>
                {/* eslint-disable-next-line */}
                <a href="#" className="btn">read more</a>
                <div className="icons-container">
                    <div className="icons">
                        <img src={serv1} alt="" />
                        <h3>fast delivery</h3>
                    </div>
                    <div className="icons">
                        <img src={serv2} alt="" />
                        <h3>fresh food</h3>
                    </div>
                    <div className="icons">
                        <img src={serv3} alt="" />
                        <h3>best quality</h3>
                    </div>
                    <div className="icons">
                        <img src={serv4} alt="" />
                        <h3>24/7 support</h3>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutSection
