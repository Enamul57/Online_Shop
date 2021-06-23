import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "../../assets/crown.svg.svg";
import "./header.styles.scss";
import {auth} from '../../firebase/firebase.utilites';
import {connect} from 'react-redux';
const Header = ({currentUser}) =>(
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

        </div>
    </div>
);
const mapStateToProps = state =>({
    currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(Header);