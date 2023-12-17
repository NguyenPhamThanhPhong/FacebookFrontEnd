import { set_user } from "./Constants"

const initialState = {
    user:null,
    isLoggedIn:false,
    posts:[],
    conversations:[],
    friends:[],
    people:[],
}

function Reducer(state,action){
    switch(action.type){
        case set_user:
            console.log('login')
            return{
                ...state,
                user:action.payload,
                isLoggedIn:true
            }
        case 'LOGOUT':
            return{
                ...state,
                user:null,
                isLoggedIn:false
            }
        default:
            return state
    }
}


export {initialState}

export default Reducer;


