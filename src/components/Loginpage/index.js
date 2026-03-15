import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './index.css'

class Loginpage extends Component {

state = {
email: '',
password: '',
error: ''
}

onChangeInput = e => {
this.setState({[e.target.name]: e.target.value})
}

onLogin = () => {


const storedUser = JSON.parse(localStorage.getItem('user'))

const {email, password} = this.state

if (!storedUser) {
  this.setState({error: 'Please create account first'})
  return
}

if (storedUser.email === email && storedUser.password === password) {
  this.props.history.push('/accountsettings')
} else {
  this.setState({error: 'Invalid email or password'})
}


}

render() {

const {error} = this.state

return (

  <div className="main">
    <div className="login-box">

      <h2>Signin to your PopX account</h2>

      <label>Email Address</label>

      <input
        name="email"
        placeholder="Enter email address"
        onChange={this.onChangeInput}
      />

      <label>Password</label>

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={this.onChangeInput}
      />

      <button className="login-btn" onClick={this.onLogin}>
        Login
      </button>

      <p className="error-text">{error}</p>

    </div>
  </div>

)

}

}

export default withRouter(Loginpage)
