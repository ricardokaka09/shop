import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {IconButton} from '@material-ui/core'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import './Header.css'
import { Link, useHistory } from 'react-router-dom';
import {useStateValue} from '../../stateProvider/StateProvider'
import { auth } from 'firebase';
import Checkout from '../checkout/Checkout'
function Header(){
    const [{basket,user},dispatch] = useStateValue();
    const history = useHistory();
    const handleSignOut = () => {
        auth.signOut();
    }
    return(
        <div className="container">
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src="http://laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png" alt=""/>
            </Link>
            <div className="header__search">
                <input type="text" placeholder='Search...'/>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                
            </div>
            <div className="header__nav">
               
                { user?  
                    <Link to='/login'>
                     <div className="header__option" onChange={handleSignOut}>
                        <span className="header__optionLineTwo">Hello {user.email}</span>
                        {/* <span className="header__optionLineTwo">Dang Ki</span> */}
                    </div>
                    </Link>:
                <Link to='/login'>
                    <div className="header__option" >
                        <span className="header__optionLineTwo" >Dang Ki</span>
                    </div>
                </Link>}
                    <div className="header__option">
                        <span className="header__optionLineTwo">Dang Nhap</span>

                    </div>
                    <div className="header__option">
                        <span className="header__optionLineOne">Language</span>
                        <span className="header__optionLineTwo">VN</span>
                    </div>
            </div>
            
            <div className="header__optionBasket">
                <Link to='/checkout'>
                    <IconButton>
                        <ShoppingCartIcon className='header__optionBasketIcon'
                        />
                    </IconButton>
                </Link>
                
                <span className="header__optionBasketLineTwo header__optionCounter">{basket?.length}</span>
                {/* <Checkout 
                price={10}
                image='https://vn-test-11.slatic.net/p/7c9365befc1dcf3bce58882ad29ed8a2.jpg_200x200Q100.jpg_.webp'/> */}

            </div>
            
        </div>
        <div className="menu">
        {/* <div class="col-lg-6"> */}
                    <nav class="header__menu">
                        <ul>
                            <li class="active"><a href="./index.html">Trang Chu</a></li>
                            <li><a href="./shop-grid.html">San Pham</a>
                                <ul class="header__menu__dropdown">
                                    <li><a href="./shop-details.html">Shop Details</a></li>
                                    <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Khuyen Mai</a>
                                <ul class="header__menu__dropdown">
                                    <li><a href="./shop-details.html">Shop Details</a></li>
                                    <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="./blog.html">Blog</a></li>
                            <li><a href="./contact.html">Lien He</a></li>
                            <li><a href="./contact.html">Gioi Thieu</a></li>
                        </ul>
                    </nav>
                {/* </div> */}
        </div>
        </div>
        
        
    )
}
export default Header;