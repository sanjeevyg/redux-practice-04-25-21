const counterReducers = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENTT':
            return state + action.payload
        case 'DECREMENT':
            return state - 1
        default: 
            return state
        }
    }
        
export default counterReducers;
