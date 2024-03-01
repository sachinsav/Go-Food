import './App.css';
import AboutUS from './screens/MyOrder';
import Home from './screens/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './screens/Layout';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import MyOrder from './screens/MyOrder';
import { CartProvider } from './screens/CartContext';
function App() {
  return (
    <>
  <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="signup" element={<SignUp />} />
            <Route exact path="myorder" element={<MyOrder />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
    
    </>
  );
}

export default App;
