import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Authguard from './Components/Authguard';
import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import Registerpage from './Pages/Registerpage';
import Adminhomepage from './Pages/Adminhomepage';
import { AuthProvider } from './Components/Authcontext';

function App() {
  return (
    <>
    <AuthProvider>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Authguard><Homepage/></Authguard>} />
      <Route path='/login' element={<Loginpage/>} />
      <Route path='/register' element={<Registerpage/>} />
      <Route path='/admin' element={<Authguard><Adminhomepage/></Authguard>} />
     </Routes>
     </BrowserRouter>
     </AuthProvider>
    </>
  );
}

export default App;
