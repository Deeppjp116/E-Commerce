import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Category from './components/Category/Category';
import Home from './components/Home/Home';
import SingleProduct from './components/SingleProduct/SingleProduct.jsx'
import Newsletter from './components/Footer/Newsletter/Newsletter';
import LogIn from './components/Header/singup/LogIn';




function App() {
    return <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:id' element={<Category />} />
            <Route path='/product/:id' element={<SingleProduct />} />
            <Route path='/singUp/login' element={<LogIn/>} />
        </Routes>
        <Newsletter />
        <Footer />

    </>
}

export default App;

