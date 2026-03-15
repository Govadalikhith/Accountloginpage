import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './index.css'

class Createaccountpage extends Component {

state = {
name: '',
phone: '',
email: '',
password: '',
company: '',
agency: 'yes'
}

onChangeInput = e => {
this.setState({[e.target.name]: e.target.value})
}

onCreateAccount = () => {

  const {name, phone, email, password, company} = this.state

  if (
    name === '' ||
    phone === '' ||
    email === '' ||
    password === '' ||
    company === ''
  ) {
    alert('Please fill all details')
    return
  }

  const user = this.state

  localStorage.setItem('user', JSON.stringify(user))

  this.props.history.push('/login')

}

render() {


return (

  <div className="main">

    <div className="create-box">

      <h2>Create your PopX account</h2>

      <input
        name="name"
        placeholder="Full Name"
        onChange={this.onChangeInput}
      />

      <input
        name="phone"
        placeholder="Phone number"
        onChange={this.onChangeInput}
      />

      <input
        name="email"
        placeholder="Email address"
        onChange={this.onChangeInput}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={this.onChangeInput}
      />

      <input
        name="company"
        placeholder="Company name"
        onChange={this.onChangeInput}
      />

      <p>Are you an Agency?</p>

      <div className="radio-box">

        <label>
          <input
            type="radio"
            name="agency"
            value="yes"
            defaultChecked
            onChange={this.onChangeInput}
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="agency"
            value="no"
            onChange={this.onChangeInput}
          />
          No
        </label>

      </div>

      <button className="create-btn" onClick={this.onCreateAccount}>
        Create Account
      </button>

    </div>

  </div>

)


}

}

export default withRouter(Createaccountpage)
