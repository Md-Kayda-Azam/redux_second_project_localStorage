


const initialState = { }

export const singleDevReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case "SINGLE_DEV" : 
            return state = payload
            
    
        default:
            return state;
    }

    
}