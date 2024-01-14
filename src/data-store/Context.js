import { createContext } from "react";
import { useReducer, useContext } from "react";
import { SET_USER,SET_CONNECTION, SET_LOGOUT, SET_LOGIN, SET_PEOPLE } from "./Constants";
import { SET_POSTS, APPEND_POSTS, REMOVE_POST } from "./Constants";
import { SET_CONVERSATIONS, APPEND_CONVERSATIONS, REMOVE_CONVERSATION } from "./Constants";

const Context = createContext();


const initialState = {
    token: null,
    user: {},
    isLoggedIn: false,
    posts: [],
    conversations: [],
    notifications: [],
    friendsRequests: [],
    friendsWaits: [],
    friends: [],
    people: [],
    realtime:{
        connection: null,
        sendMessage : (myConnection,receiverIds, conversationId, message) => {
            myConnection
                .invoke('SendMessage', receiverIds, conversationId, message)
                .then(() => {return true;})
                .catch((err) => {console.log('Error sending message:', err); return false;});
        },
        deleteMessage : (myConnection,receiverIds, conversationId, messageId) => {
            myConnection
                .invoke('DeleteMessage', receiverIds, conversationId, messageId)
                .then(() => {return true;})
                .catch((err) => {console.log('Error sending message:', err); return false;});
        }
    }
}

function reducer(state, action) {

    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }
        case SET_USER:

            return {
                ...state,
                user: action.payload
            }
        case SET_CONNECTION:
            return {
                ...state,
                realtime: {
                    ...state.realtime,
                    connection: action.payload
                }
            }
        case SET_LOGOUT:
            return initialState;
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case APPEND_POSTS:
            return {
                ...state,
                posts: [...action.payload, ...state.posts]
            }
        case REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            }
        case SET_CONVERSATIONS:
            return {
                ...state,
                conversations: action.payload
            }
        case APPEND_CONVERSATIONS:
            return {
                ...state,
                conversations: [...action.payload, ...state.conversations]
            }
        case REMOVE_CONVERSATION:
            return {
                ...state,
                conversations: state.conversations.filter(conversation => conversation.id !== action.payload)
            }
        case SET_PEOPLE:
            return {
                ...state,
                people: action.payload
            }
        default:
            return state
    }
}

function ContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )

}

function useGlobalContext() {
    const [globalState, dispatchGlobalState] = useContext(Context)
    return [globalState, dispatchGlobalState]
}


export { useGlobalContext, ContextProvider, initialState }

export default ContextProvider;




