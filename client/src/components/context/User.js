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

export const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null)

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useCurrentUser = () => React.useContext(UserContext)