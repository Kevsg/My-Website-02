const initState = {
    books: [
        {Aid:'10',Name:'July'},
        {Aid:'5',Name:'June'}
    ]    
}

export function findBooks(state = initState,action) {
    switch (action.type) {
        case 'FIND_BOOKS':
            return state;
        default:
            return state;
    }
}