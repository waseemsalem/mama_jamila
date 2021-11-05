import icon1 from "../assets/image/icon-1.png"
import icon2 from "../assets/image/icon-2.png"
import icon3 from "../assets/image/icon-3.png"

const OrderSection = () => {
    return (
        <section className="order" id="order">

            <div className="heading">
                <span>order now</span>
                <h3>fastest home delivery</h3>
            </div>

            <div className="icons-container">

                <div className="icons">
                    <img src={icon1} alt="" />
                    <h3>7:00am to 10:00pm</h3>
                </div>

                <div className="icons">
                    <img src={icon2} alt="" />
                    <h3>+1 416 257 8899</h3>
                </div>

                <div className="icons">
                    <img src={icon3} alt="" />
                    <h3>425 Queen st. west, Toronto<br />
                    Ontario, M5A 3Y7</h3>
                </div>

            </div>

            <form action="">

                <div className="flex">
                    <div className="inputBox">
                        <span>your name</span>
                        <input type="text" placeholder="customer's name" name="" id="" />
                    </div>
                    <div className="inputBox">
                        <span>your number</span>
                        <input type="number" placeholder="customer's number" name="" id="" />
                    </div>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>your order</span>
                        <input type="text" placeholder="food you want" name="" id="" />
                    </div>
                    <div className="inputBox">
                        <span>how much</span>
                        <input type="number" placeholder="number or orders" name="" id="" />
                    </div>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>your details</span>
                        <input type="text" placeholder="your message" name="" id="" />
                    </div>
                    <div className="inputBox">
                        <span>pick up time</span>
                        <input type="datetime-local" />
                    </div>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <textarea placeholder="your address" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="inputBox">
                        {/* eslint-disable-next-line */}
                        <iframe className="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.6158271473696!2d-79.6402934839356!3d43.59371777912364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4725f43fcd8f%3A0xd785e797899a770c!2striOS%20College%20Business%20Technology%20Healthcare%20-%20Mississauga%20Campus!5e0!3m2!1sen!2sca!4v1636132575641!5m2!1sen!2sca"
                            allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>

                <input type="submit" value="proceed to order" className="btn" />

            </form>

        </section>
    )
}

export default OrderSection
