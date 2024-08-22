import { createContext } from "react";

export const AppContext=createContext()


const ContextProvider=(props)=>{
    const name="ali"
    const phone='0123456789'
return (
    <AppContext.Provider value={{name,phone}}>
        {props.children}
    </AppContext.Provider>
)
}
export default ContextProvider;



