import './App.css'
import Home from './redux/components/home'
import SignupForm from './redux/components/forms/signup'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/signup" exact component={SignupForm} />

    </Router>
  );
}

export default App;
