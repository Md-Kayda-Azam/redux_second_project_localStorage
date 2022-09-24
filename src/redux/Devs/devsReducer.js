import initialState from "./initialState";



// devs reducer
const devsReducer = ( state = initialState, { type, payload}) => {

    switch (type) {
        case 'DEVS_ADDED':
            return {
                  ...state,
                  devs : payload
            }
           
    
        default:
            return state;
    }

}

export default devsReducer;