import {Route, Redirect} from 'react-router-dom'

const Protectedroute = props => {
  const user = JSON.parse(localStorage.getItem('user'))

  if (user) {
    return <Route {...props} />
  }

  return <Redirect to="/login" />
}

export default Protectedroute