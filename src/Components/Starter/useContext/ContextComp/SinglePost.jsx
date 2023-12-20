import React,{useContext} from 'react'
import { LoginContext } from './Context'

const SinglePost = () => {
    const login = useContext(LoginContext);
    console.log(login);
  return (
    <div>
        login successfull
    </div>
  )
}

export default SinglePost