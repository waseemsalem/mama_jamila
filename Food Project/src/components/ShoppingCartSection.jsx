import menu1 from "../assets/image/menu-1.png"
import menu2 from "../assets/image/menu-2.png"
import menu3 from "../assets/image/menu-3.png"
import menu4 from "../assets/image/menu-4.png"
import menu5 from "../assets/image/menu-5.png"

const ShoppingCartSection = () => {
    return (
        <section className="shopping-cart-container">

            <div className="products-container">

                <h3 className="title">your products</h3>

                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-times"></i>
                        <img src={menu1} alt="" />
                        <div className="content">
                            <h3>delicious food</h3>
                            <span> quantity : </span>
                            <input type="number" name="" value="1" id="" />
                            <br />
                            <span> price: </span>
                            <span className="price"> $40.00 </span>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-times"></i>
                        <img src={menu2} alt="" />
                        <div className="content">
                            <h3>delicious food</h3>
                            <span> quantity : </span>
                            <input type="number" name="" value="1" id="" />
                            <br />
                            <span> price: </span>
                            <span className="price"> $40.00 </span>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-times"></i>
                        <img src={menu3} alt="" />
                        <div className="content">
                            <h3>delicious food</h3>
                            <span> quantity : </span>
                            <input type="number" name="" value="1" id="" />
                            <br />
                            <span> price: </span>
                            <span className="price"> $40.00 </span>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-times"></i>
                        <img src={menu4} alt="" />
                        <div className="content">
                            <h3>delicious food</h3>
                            <span> quantity: </span>
                            <input type="number" name="" value="1" id="" />
                            <br />
                            <span> price: </span>
                            <span className="price"> $40.00 </span>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-times"></i>
                        <img src={menu5} alt="" />
                        <div className="content">
                            <h3>delicious food</h3>
                            <span> quantity: </span>
                            <input type="number" name="" value="1" id="" />
                            <br />
                            <span> price: </span>
                            <span className="price"> $40.00 </span>
                        </div>
                    </div>

                </div>

            </div>

            <div className="cart-total">

                <h3 className="title"> cart total </h3>

                <div className="box">

                    <h3 className="subtotal"> subtotal : <span>$200</span> </h3>
                    <h3 className="total"> total : <span>$200</span> </h3>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="btn">proceed to checkout</a>

                </div>

            </div>

        </section>

    )
}

export default ShoppingCartSection
