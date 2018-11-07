
const initState = {
    books: [
        {Aid:'10',Name:'July'},
        {Aid:'5',Name:'June'}
    ]    
}

export default function rootReducer (state = initState, action,data) {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'FIND_BOOKS':
            state = {
                books: action.data
            }
            return state
    }

    return state;
}

