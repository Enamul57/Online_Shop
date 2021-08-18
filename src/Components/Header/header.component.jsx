import React from 'react';
import {ReactComponent as Logo} from "../../assets/crown.svg.svg";
import {auth} from '../../firebase/firebase.utilites';
import {connect} from 'react-redux';
import CartItem from '../Cart-Icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/user/user.selector';
import { selectCartHidden } from '../../Redux/cart/cart.selector';
import { HeaderContainer, LogoContainer,OptionsContainer, LinkOptions } from './header.styles';
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
               ( <LinkOptions as ='div' onClick={()=>auth.signOut()}>
                    Sign Out
                </LinkOptions >) : 
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