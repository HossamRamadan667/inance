import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services'
import Contact from './views/Contact'
import Header from './components/Header';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
