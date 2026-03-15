import {Component} from 'react'
import './index.css'

class Accountsettingpage extends Component {

render() {


const user = JSON.parse(localStorage.getItem('user')) || {}

return (

  <div className="main1">

    <div className="account-box1">

      <div className="top1">
        <h3>Account Settings</h3>
      </div>

      <div className="profile1">

        <div className="profile-row1">

          <div className="img-box1">

            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
            />

            <div className="camera1">📷</div>

          </div>

          <div className="user1">

            <h4>{user.name || "Marry Doe"}</h4>

            <p>{user.email || "Marry@gmail.com"}</p>

          </div>

        </div>

        <p className="text1">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam
        </p>

      </div>

    </div>

  </div>

)


}

}

export default Accountsettingpage
