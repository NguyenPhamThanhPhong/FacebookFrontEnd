import { useReducer } from "react";
import Context from "./Context";
import Reducer,{initialState} from "./Reducer";

function Provider({children}){

    const [state,dispatch] = useReducer(Reducer,initialState) 

    // console.log(state)

    return(
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )

}

export default Provider;



