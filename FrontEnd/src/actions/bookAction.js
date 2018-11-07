import BooksHandler from '../handlers/BooksHandler'


export const findBooks = () => {
    return (dispatch, getState) => {
            BooksHandler.index().then((res) => {
                dispatch({type: 'FIND_BOOKS',data:res.data})
            })       
    }
};