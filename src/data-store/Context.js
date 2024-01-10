import { createContext } from "react";
import { useReducer, useContext } from "react";
import { SET_USER,SET_POSTS, SET_LOGOUT } from "./Constants";

const Context = createContext();


const initialState = {
    token:null,
    user:null,
    isLoggedIn:false,
    posts:[],
    conversations:[],
    waitForLoadConversations:[],
    currentMessages:[],
    notifications:[],
    friendsRequests:[],
    friendsWaits:[],
    friends:[],
    people:[],
}

function reducer(state,action){
    switch(action.type){
        case SET_USER:
            console.log('login')
            return{
                ...state,
                user:action.payload,
                isLoggedIn:true
            }
        case SET_LOGOUT:
            return initialState;
        default:
            return state
    }
}

function ContextProvider({children}){

    const [state,dispatch] = useReducer(reducer,initialState) 

    return(
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )

}

function useGlobalContext(){
    const [globalState,dispatchGlobalState] = useContext(Context)
    return [globalState,dispatchGlobalState]
}


export {useGlobalContext,ContextProvider,initialState}

export default ContextProvider;




