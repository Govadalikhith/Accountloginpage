import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Welcomepage from './components/Welcomepage'
import Createaccountpage from './components/Createaccountpage'
import Loginpage from './components/Loginpage'
import Accountsettingpage from './components/Accountsettingpage'
import Protectedroute from './components/Protectedroute'

const App = () => (
  <BrowserRouter>
    <Switch>

      <Route exact path="/" component={Welcomepage} />

      <Route path="/createaccount" component={Createaccountpage} />

      <Route path="/login" component={Loginpage} />

      <Protectedroute
        path="/accountsettings"
        component={Accountsettingpage}
      />

    </Switch>
  </BrowserRouter>
)

export default App