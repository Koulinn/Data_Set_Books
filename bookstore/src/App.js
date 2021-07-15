import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';
import {Col, Row} from 'react-bootstrap'
import MainContent from './MainContent';

function App() {
  return (
    <div className="mainBG container-fluid">
      <Row>
        <Col>
          <MyNavBar pizza="Home" />
        </Col>
      </Row>
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
