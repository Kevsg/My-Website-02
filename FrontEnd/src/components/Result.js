import React, { Component } from 'react';
import {connect} from 'react-redux'
import Book from './Book'

class Result extends Component {

render() {
    const books = this.props.books
    console.log(this.props)
    if(books) {
    const listItems = books.map((book) =>
      <Book></Book>
     );
    return (
      <div className='BookList'>
      {listItems}
      </div>
    );
    } else {
      return <p>Error</p>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(Result);


/*
  render() {
    const books = this.props.books
    console.log(this.props)
    if(books) {
    const listItems = books.map((book) =>
      <li key={book.Aid}>{book.Name}</li>
     );
    return (
      <ul>{listItems}</ul>
    );
    } else {
      return <p>Error</p>
    }
  }
}
*/