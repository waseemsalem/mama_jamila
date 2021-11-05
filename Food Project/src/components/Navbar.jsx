// import '../assets/js/script'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'


const Navbar = ({ props }) => {

    return (
        <>
            <header className="header">
                {/* eslint-disable-next-line */}
                <Link to="/" className="logo"> <i className="fas fa-utensils"></i> Mama Jamila </Link>
                
                <nav className="navbar">
                    <Link to="/">home</Link>
                    <Link to="/about">about</Link>
                    <Link to="/popular">popular</Link>
                    <Link to="/menu">menu</Link>
                    <Link to="/order">order</Link>
                    <Link to="/blogs">blogs</Link>
                </nav>
                <div className="icons">
                    <div id="menu-btn" className="fas fa-bars"></div>
                    <div id="search-btn" className="fas fa-search"></div>
                    <div id="cart-btn" className="fas fa-shopping-cart"></div>
                    <div id="login-btn" className="fas fa-user"></div>
                </div>
            </header>

            <SearchForm />
        </>
    )
}

export default Navbar
