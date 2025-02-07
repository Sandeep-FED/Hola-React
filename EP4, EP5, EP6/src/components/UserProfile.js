import React, { useContext } from "react"
import { UserContext } from "../utils/UserContext"

import { User } from "lucide-react"

export const UserProfile = () => {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const { userName } = useContext(UserContext)

  return (
    <div className='bg-gray-200 rounded-full w-[50px] h-[50px] flex justify-center items-center p-3'>
      {!loggedIn ? (
        <p
          onClick={() => setLoggedIn(true)}
          className='flex text-xs items-center text-gray-600'
        >
          Login
        </p>
      ) : (
        loggedIn && (
          <>
            <User
              size={16}
              className='text-gray-600'
              onClick={() => setLoggedIn(false)}
            />
            <p>{userName}</p>
          </>
        )
      )}
    </div>
  )
}
