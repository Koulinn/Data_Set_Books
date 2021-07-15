import React, { Component } from 'react'
import fantasy from './data/fantasy.json'
import history from './data/history.json'
import horror from './data/horror.json'
import scifi from './data/scifi.json'
import Search from './components/Search';
import Section from './components/Section';
import {Col, Container, Row} from 'react-bootstrap'
import CommentArea from './components/CommentArea'

export default class MainContent extends Component {
    state = {
        displayedBook: fantasy[0]
    }

    getUserSelectedBook = (bookSelected) =>{
      this.setState({
        displayedBook : bookSelected
      })
    }

    render() {
        return (
            <Container fluid>
        <Row>
          <Col md={8}>
            <Search getUserSelectedBook={this.getUserSelectedBook} title="Search" theme={fantasy} />
            <Section getUserSelectedBook={this.getUserSelectedBook} title="Latest Release" theme={fantasy} slInitial={0} slFinal={4} />
            <Section getUserSelectedBook={this.getUserSelectedBook} title="History" theme={history} slInitial={0} slFinal={4}/>
            <Section getUserSelectedBook={this.getUserSelectedBook} title="Horror" theme={horror} slInitial={0} slFinal={4} />
            <Section getUserSelectedBook={this.getUserSelectedBook} title="Sci-fi" theme={scifi} slInitial={0} slFinal={4}/>
          </Col>
          <Col md={4}>
              <CommentArea id="commentArea" book={this.state.displayedBook} />
            
          </Col>
        </Row>
      </Container>
        )
    }
}
