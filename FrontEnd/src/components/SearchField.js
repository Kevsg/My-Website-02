import React, { Component } from 'react';

class SearchField extends Component {
  render() {
    return (
      <div className="SearchField">
        
        <form>
            <p>Please input the name of the book.</p>
            <input type="text" name="bookname"></input>
            <button type="button" className="FindButton" onClick={this.findBook}> Find it! </button>
        </form>
        
      </div>
    );
  }

  findBook() {
      console.log('Finding books')
  }
}

export default SearchField;
