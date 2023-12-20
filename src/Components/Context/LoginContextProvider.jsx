import React, { createContext, useState } from "react";
import MainComponent from "../Starter/useContext1/MainComponent";

export const LoginContext = createContext();

const LoginContextProvider = () => {
  const [userDetails, setUserDetails] = useState(true);
  return (
    <LoginContext.Provider value={userDetails}>
      {/* {Children} */}
      <MainComponent/>
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
