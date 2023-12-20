import React,{ useContext } from 'react'
import { LoginContext } from '../../Context/LoginContextProvider';

const SingleComponent = () => {
    const login = useContext(LoginContext);
    console.log(login);
  return (
    <div>you are Welcome to Single component</div>
  )
}

export default SingleComponent