import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Welcomepage extends Component {
  render() {
    return (
      <div className="main">
        <div className="phone">

          <div className="content">
            <h2>Welcome to PopX</h2>

            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
            </p>

            <Link to="/createaccount" className="create">
              Create Account
            </Link>

            <Link to="/login" className="login">
              Already Registered? Login
            </Link>
          </div>

        </div>
      </div>
    )
  }
}

export default Welcomepage