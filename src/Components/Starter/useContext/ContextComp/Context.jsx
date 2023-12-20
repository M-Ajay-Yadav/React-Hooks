import React,{ createContext } from 'react'
import MainComponent from './MainComponent';

export const LoginContext = createContext();
const Context = () => {
  return (
    <LoginContext.Provider value= {true}>
    <div>
        <MainComponent/> 
    </div>
    </LoginContext.Provider>

  )
}

export default Context