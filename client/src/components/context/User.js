import React from "react"

export const CurrentUserContext = React.createContext()

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null)

  function fetchCurrentUser() {
    fetch("/authorized_user")
    fetch("/users")
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