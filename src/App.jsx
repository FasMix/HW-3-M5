import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Contacts from './Contacts';
import Header from './Header';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
