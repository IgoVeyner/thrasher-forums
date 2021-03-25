import './App.css'
import Home from './redux/components/home'
import SignupForm from './redux/components/forms/signup'
import LoginForm from './redux/components/forms/login'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/signup" exact component={SignupForm} />
      <Route path="/login" exact component={LoginForm} />

    </Router>
  );
}

export default App;
