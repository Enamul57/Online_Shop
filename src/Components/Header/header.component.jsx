import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "../../assets/crown.svg.svg";
import "./header.styles.scss";
import {auth} from '../../firebase/firebase.utilites';
import {connect} from 'react-redux';
import CartItem from '../Cart-Icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/user/user.selector';
import { selectCartHidden } from '../../Redux/cart/cart.selector';
const Header = ({currentUser,hidden}) =>(
    <div className="header">
        <Link to="/">
            <Logo></Logo>
        </Link>
        <div className = "options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/contact">
                Contact
            </Link>
            {
                currentUser ?
               ( <div className='option' onClick={()=>auth.signOut()}>
                    Sign Out
                </div>) : 
                (<Link className='option' to='/sign-in'>
                    Sign In
                </Link>)
            }
        <CartItem/>
        </div>
        {
            hidden? null:  <CartDropdown/>
        
        }
        
    </div>
);
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);