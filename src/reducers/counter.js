const counterReducers = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + action.payload
        case 'DECREMENTTT':
            return state - 1
        default: 
            return state
        }
    }
        
export default counterReducers;
