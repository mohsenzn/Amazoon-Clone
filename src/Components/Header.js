import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "../context/StateProvider";
function Header() {
  const [{basket},dispatch] = useStateValue();
  return (
    <nav className="header">
      {/* logo on the left --> image*/}
      <Link to="/">
        <img
          src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
          alt=""
          className="header__logo"
        />
      </Link>
      {/* searchBox  */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 link on right */}
      <div className="header__nav">
          {/* link 1 */}
          <Link className="header__link" to="/login">
              <div className="header__option">
                  <span className="optionOne">Hello Mohi</span>
                  <span className="optionOTwo">Sign In </span>
              </div>
          </Link>
          {/* link 2 */} <Link className="header__link" to="/">
              <div className="header__option">
                  <span className="optionOne">Returns</span>
                  <span className="optionOTwo">& orders</span>
              </div>
          </Link>
          
          {/* link 3 */}
          <Link className="header__link" to="/">
              <div className="header__option">
                  <span className="optionOne">Your</span>
                  <span className="optionOTwo">Prime</span>
              </div>
          </Link>
          {/* link 4 */}
          <Link to="/checkout" className="header__link">
              <div className="header__optionBasket" >
                  {/* shopping basket icon */}
                  <ShoppingBasketIcon/>
                  {/* number of item in the basket */}
                  <span className="optionOTwo header__basketCount">{basket?.length}</span>
              </div>
          </Link>

      </div>
      {/* basket icon with number */}
    </nav>
  );
}

export default Header;
