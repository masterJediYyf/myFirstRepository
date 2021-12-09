import React from 'react';
import {
    BrowserRouter as Router, // 提高代码的可读性
    Routes,
    Route
} from 'react-router-dom';
import Store from '../pages/Store';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Cart from '../pages/Cart';

const DefaultRoutes = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/' exact element={<Store/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default DefaultRoutes;
