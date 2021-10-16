import { createStore } from 'redux'

const STATE_LOGIN = {
    user: {
        token: '',        
    },
}
function userCredentials(state = STATE_LOGIN, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: {
                    token: action.token                    
                }
            };        
        default:
            return state;
    }
}
const store = createStore(userCredentials);

export default store;