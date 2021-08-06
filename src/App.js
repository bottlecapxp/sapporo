import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/home';




function App() {
return (
<Router>
  <Switch>
    <Route path='/' exact strict component={Home} />
  </Switch>
</Router>

)

}

export default App;
