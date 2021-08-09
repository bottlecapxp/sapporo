import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/home'
import Prizing from './Pages/prizing'
import Rules from './Pages/rules'
import Terms from './Pages/terms'
import Collect from './Pages/collect'
import Ready from './Pages/ready'

function App() {
return (
<Router>
  <Switch>
    <Route path='/' exact strict component={Home} />
    <Route path='/prizing' exact strict component={Prizing} />
    <Route path='/rules' exact strict component={Rules} />
    <Route path='/terms' exact strict component={Terms} />
    <Route path='/collect' exact strict component={Collect} />
    <Route path='/ready' exact strict component={Ready} />
  </Switch>
</Router>

)

}

export default App;
