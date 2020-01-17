const logReducer = (state = 'hey', action)=>{
    switch (action.type) {
        case 'SAY':
            return state = action.payload;
            
    
        default:
            return state = 'Nah';
            
    }
}

export default logReducer;