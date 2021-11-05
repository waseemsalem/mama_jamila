
const Footer = () => {
    return (
        <section className="footer">

            <div className="newsletter">
                <h3>newsletter</h3>
                <form action="">
                    <input type="email" name="" placeholder="enter your email" id="" />
                    <input type="submit" value="subscribe" />
                </form>
            </div>

            <div className="box-container">

                <div className="box">
                    <h3>our menu</h3>
                    {/* eslint-disable-next-line */}
                    <a href="#"><i className="fas fa-arrow-right"></i> pizza</a>
                    {/* eslint-disable-next-line */}
                    <a href="#"><i className="fas fa-arrow-right"></i> burger</a>
                    {/* eslint-disable-next-line */}
                    <a href="#"><i className="fas fa-arrow-right"></i> chicken</a>
                    {/* eslint-disable-next-line */}
                    <a href="#"><i className="fas fa-arrow-right"></i> pasta</a>
                    {/* eslint-disable-next-line */}
                    <a href="#"><i className="fas fa-arrow-right"></i> and more...</a>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    {/* eslint-disable-next-line */}
                    <a href="#home"> <i className="fas fa-arrow-right"></i> home</a>
                    {/* eslint-disable-next-line */}
                    <a href="/about"> <i className="fas fa-arrow-right"></i> about</a>
                    {/* eslint-disable-next-line */}
                    <a href="/popular"> <i className="fas fa-arrow-right"></i> popular</a>
                    {/* eslint-disable-next-line */}
                    <a href="/menu"> <i className="fas fa-arrow-right"></i> menu</a>
                    {/* eslint-disable-next-line */}
                    <a href="/order"> <i className="fas fa-arrow-right"></i> order</a>
                    {/* eslint-disable-next-line */}
                    <a href="/blogs"> <i className="fas fa-arrow-right"></i> blogs</a>
                </div>

                <div className="box">
                    <h3>extra links</h3>
                    {/* eslint-disable-next-line */}
                    <a href="#"> <i className="fas fa-arrow-right"></i> my order</a>
                    {/* eslint-disable-next-line */}
                    <a href="#"> <i className="fas fa-arrow-right"></i> my account</a>
                    {/* eslint-disable-next-line */}
                    <a href="#"> <i className="fas fa-arrow-right"></i> my favorite</a>
                    {/* eslint-disable-next-line */}
                    <a href="#"> <i className="fas fa-arrow-right"></i> terms of use</a>
                    {/* eslint-disable-next-line */}
                    <a href="#"> <i className="fas fa-arrow-right"></i> privary policy</a>
                </div>

                <div className="box">
                    <h3>opening hours</h3>
                    <p>monday : 7:00am to 10:00pm</p>
                    <p>tuesday : 7:00am to 10:00pm</p>
                    <p>wednesday : 7:00am to 10:00pm</p>
                    <p>friday : 7:00am to 10:00pm</p>
                    <p>saturday and sunday closed</p>
                </div>

            </div>

            <div className="bottom">

                <div className="share">
                    {/* eslint-disable-next-line */}
                    <a href="#" className="fab fa-facebook-f"></a>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="fab fa-twitter"></a>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="fab fa-instagram"></a>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="fab fa-linkedin"></a>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="fab fa-pinterest"></a>
                </div>

                <div className="credit">&copy; 2021 <span>Waseem Salem</span> | all rights reserved! </div>
                <div><p>This website for educational purposes only</p></div>

            </div>

        </section>
    )
}

export default Footer
