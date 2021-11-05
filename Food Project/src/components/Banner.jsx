import banner1 from "../assets/image/banner-1.png"
import banner2 from "../assets/image/banner-2.png"
import banner3 from "../assets/image/banner-3.png"

const Banner = () => {
    return (
        <section className="banner">

            <div className="row-banner">
                <div className="content">
                    <span>double cheese</span>
                    <h3>burger</h3>
                    <p>with coco cola and fries</p>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="btn">order now</a>
                </div>
            </div>

            <div className="grid-banner">
                <div className="grid">
                    <img src={banner1} alt="" />
                    <div className="content">
                        <span>special offer</span>
                        <h3>upto 50% off</h3>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn">order now</a>
                    </div>
                </div>
                <div className="grid">
                    <img src={banner2} alt="" />
                    <div className="content center">
                        <span>special offer</span>
                        <h3>upto 25% extra</h3>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn">order now</a>
                    </div>
                </div>
                <div className="grid">
                    <img src={banner3} alt="" />
                    <div className="content">
                        <span>limited offer</span>
                        <h3>100% cashback</h3>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn">order now</a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Banner
