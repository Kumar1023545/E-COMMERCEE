import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Authguard from './Components/Authguard';
import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import Registerpage from './Pages/Registerpage';
import Adminhomepage from './Pages/Adminhomepage';
import { AuthProvider } from './Components/Authcontext';
import { Detailspage } from './Pages/Detailspage';
import Viewcartpage from './Pages/Viewcartpage';
import Createproduct from './Pages/Createproduct';

function App() {
  return (
    <>
    <AuthProvider>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Authguard><Homepage/></Authguard>} />
      <Route path='/movie/:id' element={<Detailspage/>}/>
      <Route path='/cart' element={<Viewcartpage/>} />
      <Route path='/login' element={<Loginpage/>} />
      <Route path='/register' element={<Registerpage/>} />
      <Route path='/admin' element={<Authguard><Adminhomepage/></Authguard>} />
      <Route path='/addproduct' element={<Createproduct/>} />
     </Routes>
     </BrowserRouter>
     </AuthProvider>
    </>
  );
}

export default App;
