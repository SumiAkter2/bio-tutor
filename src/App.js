
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Checkout from './components/Checkout/Checkout';
import RequireAuth from './components/LogIn/RequireAuth/RequireAuth';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
    <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/login' element={<LogIn></LogIn>}></Route>
      <Route path='/checkout' element={
<RequireAuth>
<Checkout></Checkout> 
</RequireAuth>

      }></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
