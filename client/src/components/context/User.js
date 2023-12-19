// import React, { useState } from "react"

// const UserContext = React.createContext();

// function UserProvider({ children }) {
//     const [currentUser, setCurrentUser] = useState(false)

//   return (
//     <UserContext.Provider value={{ currentUser, setCurrentUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export { UserContext, UserProvider };



//come back to this

import React from "react"

export const CurrentUserContext = React.createContext()

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null)

  function fetchCurrentUser() {
    fetch("/authorized_user")
    fetch("/customers")
    .then((res) => {
      if(res.ok){
        res.json().then(setCurrentUser)
      }
    })
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, fetchCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export const useCurrentUser = () => React.useContext(CurrentUserContext)