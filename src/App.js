import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/home';
import Prizing from './Pages/prizing';
import Rules from './Pages/rules.js';
import Terms from './Pages/terms.js'

function App() {
return (
<Router>
  <Switch>
    <Route path='/' exact strict component={Home} />
    <Route path='/prizing' exact strict component={Prizing} />
    <Route path='/rules' exact strict component={Rules} />
    <Route path='/terms' exact strict component={Terms} />
  </Switch>
</Router>

)

}

export default App;
