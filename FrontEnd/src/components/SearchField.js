import React, { Component } from 'react';
import {connect} from 'react-redux'
import {findBooks} from '../actions/bookAction'

class SearchField extends Component {

  findBook = () =>{
    try {
      console.log('Finding books')
      this.props.findBook()
    }
    catch (err) {
      console.log(err)
    }  
    return
  }

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


}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findBook: () => {
      dispatch(findBooks())
    }
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(SearchField);
