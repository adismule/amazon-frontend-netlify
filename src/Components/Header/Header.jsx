import React, { useContext } from 'react';
import classes from './Header.module.css';
import { SlLocationPin } from 'react-icons/sl';
import { IoSearchSharp, IoCartOutline } from 'react-icons/io5';
import LowerHeader from './LowerHeader';
import { Link } from "react-router-dom";
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/firebase';


const Header = () => {
  const { state, dispatch } = useContext(DataContext);
const { user, basket } = state;

  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0) || 0;
  return (
    <>
      <section className={classes.fixed}>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </Link>
          </div>
          <div className={classes.delivery}>
            <span><SlLocationPin /></span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
          <div className={classes.search}>
            <select>
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search product" />
            <button className={classes.search_icon}><IoSearchSharp /></button>
          </div>
          <div className={classes.order_container}>
            <Link to="#" className={classes.language}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="US flag" />
              <select>
                <option value="">EN</option>
              </select>
            </Link>

            <Link to={!user && "/auth"}>
              <div>
                {
                  user? (
                    <>
                      <p>Hello {user?.email.split("@")[0]}</p>
                      <span onClick={()=>auth.signOut()}>Sign Out</span>
                    </>
                  ):(
                    <>
                      <p>Hello, Sign In</p>
                      <span>Account & Lists</span>
                    </>
                  )
                }
              </div>
            </Link>

            <Link to="/Orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <IoCartOutline />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
