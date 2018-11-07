import React, { Component } from 'react';
import Book from './Book'


class BookList extends Component {
    
    constructor(props) {
        super(props);
        this.state ={
            Books: [
                {
                    name: 'Angea',
                    author: 'Roman Atkinson'
                },
                {
                    name: 'Benola',
                    author: 'John Dagger'
                },
                {
                    name: 'Carla',
                    author: 'John Striker'
                },
                {
                    name: 'Dead be Alive',
                    author: 'Nama Slosky'
                },
            ]   
        }
    }



    render() {
        let books = this.state.Books
        const listItems = books.map((book) => 
           <Book book={book} key={book.name}/>
         );

        return (
        <div className="Books">
            {listItems}
        </div>
        );
    }
}

export default BookList;
