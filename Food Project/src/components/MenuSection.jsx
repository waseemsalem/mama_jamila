import menu1 from "../assets/image/menu-1.png"
import menu2 from "../assets/image/menu-2.png"
import menu3 from "../assets/image/menu-3.png"
import menu4 from "../assets/image/menu-4.png"
import menu5 from "../assets/image/menu-5.png"
import menu6 from "../assets/image/menu-6.png"

const MenuSection = () => {
    return (
        <section className="menu" id="menu">

            <div className="heading">
                <span>our menu</span>
                <h3>our top dishes</h3>
            </div>

            <div className="box-container">
                {/* eslint-disable-next-line */}
                <a href="#" className="box">
                    <img src={menu1} alt="" />
                    <div className="content">
                        <h3>delicious food</h3>
                        <div className="price">$40.00</div>
                    </div>
                </a>
                {/* eslint-disable-next-line */}
                <a href="#" className="box">
                    <img src={menu2} alt="" />
                    <div className="content">
                        <h3>delicious food</h3>
                        <div className="price">$40.00</div>
                    </div>
                </a>
                {/* eslint-disable-next-line */}
                <a href="#" className="box">
                    <img src={menu3} alt="" />
                    <div className="content">
                        <h3>delicious food</h3>
                        <div className="price">$40.00</div>
                    </div>
                </a>
                {/* eslint-disable-next-line */}
                <a href="#" className="box">
                    <img src={menu4} alt="" />
                    <div className="content">
                        <h3>delicious food</h3>
                        <div className="price">$40.00</div>
                    </div>
                </a>
                {/* eslint-disable-next-line */}
                <a href="#" className="box">
                    <img src={menu5} alt="" />
                    <div className="content">
                        <h3>delicious food</h3>
                        <div className="price">$40.00</div>
                    </div>
                </a>
                {/* eslint-disable-next-line */}
                <a href="#" className="box">
                    <img src={menu6} alt="" />
                    <div className="content">
                        <h3>delicious food</h3>
                        <div className="price">$40.00</div>
                    </div>
                </a>

            </div>

        </section>
    )
}

export default MenuSection
