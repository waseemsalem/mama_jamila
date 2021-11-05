import blog1 from "../assets/image/blog-1.jpg"
import blog2 from "../assets/image/blog-2.jpg"
import blog3 from "../assets/image/blog-3.jpg"
const BlogsSection = () => {
    return (
        <section className="blogs" id="blogs">

            <div className="heading">
                <span>our blogs</span>
                <h3>our daily stories</h3>
            </div>

            <div className="box-container">

                <div className="box">
                    <div className="image">
                        <h3> <i className="fas fa-calendar"></i> 21st may, 2021 </h3>
                        <img src={blog1} alt="" />
                    </div>
                    <div className="content">
                        <div className="tags">
                            {/* eslint-disable-next-line */}
                            <a href="#"> <i className="fas fa-tag"></i> food / </a>
                            {/* eslint-disable-next-line */}
                            <a href="#"> <i className="fas fa-tag"></i> burger / </a>
                            {/* eslint-disable-next-line */}
                            <a href="#"> <i className="fas fa-tag"></i> pizza </a>
                        </div>
                        <h3>blog title goes here...</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.</p>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn">read more</a>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <h3> <i className="fas fa-calendar"></i> 21st may, 2021 </h3>
                        <img src={blog2} alt="" />
                    </div>
                    <div className="content">
                        <div className="tags">
                            {/* eslint-disable-next-line */}
                            <a href="#"> <i className="fas fa-tag"></i> food / </a>
                            {/* eslint-disable-next-line */}
                            <a href="#"> <i className="fas fa-tag"></i> burger / </a>
                            {/* eslint-disable-next-line */}
                            <a href="#"> <i className="fas fa-tag"></i> pizza </a>
                        </div>
                        <h3>blog title goes here...</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.</p>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn">read more</a>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <h3> <i className="fas fa-calendar"></i> 21st may, 2021 </h3>
                        <img src={blog3} alt="" />
                    </div>
                    <div className="content">
                        <div className="tags">
                            {/* eslint-disable-next-line */}
                            <a href="#"> <i className="fas fa-tag"></i> food / </a>
                            {/* eslint-disable-next-line */}
                            <a href="#"> <i className="fas fa-tag"></i> burger / </a>
                            {/* eslint-disable-next-line */}
                            <a href="#"> <i className="fas fa-tag"></i> pizza </a>
                        </div>
                        <h3>blog title goes here...</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.</p>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn">read more</a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default BlogsSection
