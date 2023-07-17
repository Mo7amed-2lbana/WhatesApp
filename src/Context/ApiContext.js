import axios from "axios";
import { createContext } from "react";

export const ApiContext = createContext();

export function ApiContextProvider({ children }) {



// get api data 
async function getDataApi(url){
    const {data} =await axios.get(`${url}`);
    return data;
}






  return (
    <>
      <ApiContext.Provider value={{getDataApi}}>{children}</ApiContext.Provider>
    </>
  );
}
