import { Route,Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
