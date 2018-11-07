import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        color: 'black'
    }
  });


class Book extends Component {
    
    constructor(props) {
        super(props);
        this.state ={
            book: props.book
        }
        
    }

    handleScroll(e) {
        this.setState((state) => {
            return {
                book: {
                        name: 'Alive',
                        author: 'Laura Slosky'
                }
            }
        })
        console.log(this.state)
    }


    render() {
        const { classes } = this.props;
        let bookState = this.state.book
        return (
        <div className={classes.root} onClick={(e) => this.handleScroll(e)}>
            <h1>{bookState.name}</h1>
            <h2>{bookState.author}</h2>
        </div>
        );
    }
}

export default  withStyles(styles)(Book);
