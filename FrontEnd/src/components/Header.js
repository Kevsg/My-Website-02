import React, { Component } from 'react';
import BooksIcon from './BooksIcon'

class Header extends Component {
  render() {
    return (
      <div className="nav">



          <div className='navcol1 navtext'>
            Focus Point
 
          </div>
          <div className='navcol2'><input className="searchbar" type="text" placeholder="Search.."></input></div>
          <div className='navcol3 navtext grey-darkest'>Sign Up</div>
          <div className='navcol4 navtext'>Log In</div>

        
      </div>
    );
  }
}

export default Header;
