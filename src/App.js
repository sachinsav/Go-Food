import './App.css';
import AboutUS from './screens/AboutUS';
import Home from './screens/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './screens/Layout';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<SignUp />} />
          <Route exact path="about" element={<AboutUS />} />
        </Route>
      </Routes>
      
    </Router>
    
    </>
  );
}

export default App;
