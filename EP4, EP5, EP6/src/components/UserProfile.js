import React from "react"
import { User } from "lucide-react"

export const UserProfile = () => {

  const [loggedIn, setLoggedIn] = React.useState(false)

  return (
    <div className='user-profile-container'>
      {!loggedIn ? (
        <p
          onClick={() => setLoggedIn(true)}
          className='delivery-time avatar-icon'
        >
          Login
        </p>
      ) : (
        loggedIn && (
          <User
            size={16}
            className='avatar-icon'
            onClick={() => setLoggedIn(false)}
          />
        )
      )}
    </div>
  )
}
