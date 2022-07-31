import React, {createContext, useContext, useReducer} from 'react';
// import reducer, {initialState} from './reducer.js'
// console.log(reducer, initialState);
//Data Layer
export const StateContext = createContext();
// Provide data layer
export const StateProvider = ({reducer, initialState, children})=>{
    // console.log("initialState : ", initialState);
    // console.log("reducer : ", reducer);
    // console.log("children : ", children);
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
};
//Information pull
export const useStateValue = ()=> useContext(StateContext);

