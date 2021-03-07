import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadUserRequest } from '../../store/ducks/user/actions'

const Users = () => {

  const user = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(loadUserRequest())
  }, [])


  return (
    <> 
      { user.error && <p>falha!</p>}
      <ul>
        { user !== null && user.arrayDeUsuarios.map((item: any) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </>  
  )
}

export default Users