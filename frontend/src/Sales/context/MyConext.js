import { createContext, useReducer } from "react";
//import { useReducer } from "react";

export const MyContext = createContext()

export const myReducer = (preState, action) =>{
    console.log("heelo")
    switch(action.type){
        case 'SET_PRODUCTS':
            return{
                allProducts: action.payload
            }
        case 'CREATE_PRODUCT':
            return {
                allProducts: [...preState.allProducts,action.payload]
            }
        case 'DELETE_PRODUCT':
            return{
                allProducts: preState.allProducts.filter((w)=>(w._id !== action.payload._id))
            }

        case 'UPDATE_PRODUCT':
            return{
                allProducts: preState.allProducts.map((w)=>{
                    if(w._id === action.payload._id) return action.payload
                    else return w
                })
            }
        default:
            return preState
            
    }
}

export const MyContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(myReducer,{
        allProducts:null
    })

    
    return (
        <MyContext.Provider value = {{...state, dispatch}} > 
            {children}
        </MyContext.Provider>
    )
}