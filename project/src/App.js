import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/home/Home';
import Company from './components/pages/company/Company';
import Contact from './components/pages/contact/Contact';
import NewProject from './components/pages/newproject/NewProject';
import Container from './components/layout/container/Container';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import Projects from './components/pages/projects/Projects';

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min_height"> 
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/newproject' element={<NewProject/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}

export default App;
