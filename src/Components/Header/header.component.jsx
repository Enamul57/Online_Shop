import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "../../assets/crown.svg.svg";
import {auth} from '../../firebase/firebase.utilites';
import {connect} from 'react-redux';
import CartItem from '../Cart-Icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/user/user.selector';
import { selectCartHidden } from '../../Redux/cart/cart.selector';
import { HeaderContainer, LogoContainer,OptionsContainer, LinkOptions, DivOptions } from './header.styles';
const Header = ({currentUser,hidden}) =>(
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo></Logo>
        </LogoContainer>
        <OptionsContainer className = "options">
            <LinkOptions to="/shop">
                Shop
            </LinkOptions>
            <LinkOptions to="/contact">
                Contact
            </LinkOptions>
            {
                currentUser ?
               ( <DivOptions onClick={()=>auth.signOut()}>
                    Sign Out
                </DivOptions>) : 
                (<LinkOptions to='/sign-in'>
                    Sign In
                </LinkOptions>)
            }
        <CartItem/>
        </OptionsContainer>
        {
            hidden? null:  <CartDropdown/>
        
        }
        
    </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);