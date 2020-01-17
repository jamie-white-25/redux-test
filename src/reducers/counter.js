const counterReducer = (state = 0, action) =>{
    switch (action.type) {
        case 'ADD':
            return state + action.payload;
                
        case 'TAKE':
            return state - action.payload;
    
        default:
            return state;
            
    }
}

export default counterReducer;