import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';
import {Col, Row} from 'react-bootstrap'
import MainContent from './MainContent';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Register from './components/Register';

function App() {
  return (
    <div className="mainBG container-fluid px-0">
      <Router>
        <Col>
          <MyNavBar pizza="Home" />
        </Col>
      <Hero />
      <Route path="/" exact component={MainContent} />
      <Route path="/register" component={Register}/>
      </Router>
  
      <Footer />
    </div>
  );
}

export default App;
