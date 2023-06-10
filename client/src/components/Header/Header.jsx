import './Header.scss';
import { TbSearch } from 'react-icons/tb';
import { CgLogOff, CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import { useNavigate, NavLink } from 'react-router-dom';
import Search from './Search/Search';
import Cart from '../Cart/Cart';
import { Context } from '../../utils/context';
import { useContext, useEffect, useState } from 'react';
import image from '../../assets/icons/shopping-cart.png';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);

  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`main-header ${scroll ? 'sticky-header' : ''}`}>
        <div className='div header-content'>
          <ul className='left'>
            <li onClick={() => navigate('/')}>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className='center'>DeepVStore.Dev</div>
          <div className='right'>
            {/* <TbSearch onClick={() => setShowSearch(true)} /> */}
            <lord-icon
              src='https://cdn.lordicon.com/zniqnylq.json'
              trigger='hover'
              colors='primary:#4be1ec,secondary:#cb5eee'
              style={{ width: '40px', height: '40px' }}
              onClick={() => setShowSearch(true)}
            ></lord-icon>
            {/* <AiOutlineHeart /> */}
            <lord-icon
              src='https://cdn.lordicon.com/pnhskdva.json'
              trigger='hover'
              colors='primary:#e83a30,secondary:#cb5eee'
              style={{ width: '40px', height: '40px' }}
            ></lord-icon>
            <span
              className='cart-icon'
              onClick={() => {
                setShowCart(true);
              }}
            >
              {/* <CgShoppingCart /> */}
              {/* <img src={image} alt=""  style={{ width: '30xp', height: '20px' }} /> */}
              <lord-icon
                src='https://cdn.lordicon.com/hyhnpiza.json'
                trigger='hover'
                colors='primary:#2516c7'
                style={{ width: '40px', height: '40px' }}
              ></lord-icon>
              {!!cartCount && <span>{cartCount}</span>}
            </span>
            {/* <button className='signup-button'>Sign Up</button> */}
            <NavLink to={'/singup/login'} className='signup-button'>
              Sign Up
            </NavLink>
          </div>
        </div>
      </header>
      {showCart && <Cart setshowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
