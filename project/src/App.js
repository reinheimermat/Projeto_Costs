import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from './components/pages/home/Home';
import Company from './components/pages/company/Company';
import Contact from './components/pages/contact/Contact';
import NewProject from './components/pages/newproject/NewProject';
import Container from './components/layout/container/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Container customClass="min_height"> 
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/company' element={<Company/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/newproject' element={<NewProject/>}/>
        </Routes>
      </Container>
    </Router>
  )
}

export default App;
