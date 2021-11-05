import { useEffect } from "react";
import AboutSection from "./components/AboutSection";
// eslint-disable-next-line
import Banner from "./components/Banner";
import BlogsSection from "./components/BlogsSection";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import LoginForm from "./components/LoginForm";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";
import OrderSection from "./components/OrderSection";
import PopularSection from "./components/PopularSection";
import ShoppingCartSection from "./components/ShoppingCartSection";
// eslint-disable-next-line
import { Route, BrowserRouter as Routes, Link, Switch } from 'react-router-dom'
// eslint-disable-next-line
import SearchForm from "./components/SearchForm";
import $ from 'jquery'

function App() {

  useEffect(() => {
    let searchForm = document.querySelector('.search-form-container');
    let cart = document.querySelector('.shopping-cart-container');
    let loginForm = document.querySelector('.login-form-container');
    let navbar = document.querySelector('.header .navbar');


    $('#search-btn').click(() => {
      searchForm.classList.toggle('active');
      cart.classList.remove('active');
      loginForm.classList.remove('active');
      navbar.classList.remove('active');
    });



    $('#cart-btn').click(() => {
      cart.classList.toggle('active');
      searchForm.classList.remove('active');
      loginForm.classList.remove('active');
      navbar.classList.remove('active');
    });


    $('#login-btn').click(() => {
      loginForm.classList.toggle('active');
      searchForm.classList.remove('active');
      cart.classList.remove('active');
      navbar.classList.remove('active');
    });



    $('#menu-btn').click(() => {
      navbar.classList.toggle('active');
      searchForm.classList.remove('active');
      cart.classList.remove('active');
      loginForm.classList.remove('active');
    });

    window.onscroll = () => {
      navbar.classList.remove('active');
      searchForm.classList.remove('active');
      loginForm.classList.remove('active')
    }

    let home = document.querySelector('.home')
    if (home) {
      home.onmousemove = (e) => {

        let x = (window.innerWidth - e.pageX * 2) / 90;
        let y = (window.innerHeight - e.pageY * 2) / 90;

        document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
      }

      home.onmouseleave = () => {
      }

      document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px) translateY(0px)`;
    }
  });

  return (
    <>
      <Navbar />

      <Route path='/blogs'>
        <BlogsSection />
      </Route>

      <Route path='/order'>
        <OrderSection />
      </Route>

      <Route path='/menu'>
        <MenuSection />
      </Route>

      <Route path='/popular'>
        <PopularSection />
      </Route>

      <Route path='/about'>
        <AboutSection />
      </Route>

      <Route path='/burger-menu'>
        <Navbar />
      </Route>

      <Route path='/shopping-cart' exact >
        {/* <ShoppingCartSection /> */}
      </Route>

      <Route path='/login-form' exact >
        {/* <LoginForm /> */}
      </Route>

      <Route path='/search-form' exact >
        {/* <SearchForm /> */}
      </Route>

      <Route path='/' exact >
        <HomeSection />
        <CategorySection />
      </Route>

      {/* Hidden Components */}
      <ShoppingCartSection />
      <LoginForm />


      <Footer />
    </>
  );
}

export default App;
