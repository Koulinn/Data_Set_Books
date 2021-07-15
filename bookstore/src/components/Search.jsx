import { useState } from "react";
import { Container, Form, Button, FormControl, Row } from "react-bootstrap";
import Cardp from "./Cardp";

function Search (props) {
 
  const [search, setSearch] = useState({
    searchInput: '',
    books: []
  })

  const searchBooks = (e) => {
    e.preventDefault()
    setSearch({
      searchInput: e.target.value,
      books: props.theme.filter((book) => book.title.toLowerCase().includes(search.searchInput.toLowerCase()))
    })
    
    if (e.target.value === '') {
      setSearch({
        searchInput: e.target.value,
        books: []
      })
    }
  }

    return (
      <Container className="xtra-topMargin px-0">
        <Row>
          <h2 className="px-4 ml-2 align-items-center">{props.title}</h2>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => searchBooks(e)} />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Row>
        <div className="row row-cols-sm-2 row-cols-md-2 row-cols-lg-4 px-3">
          {search.books.map((book) => <Cardp getUserSelectedBook={props.getUserSelectedBook} key={book.asin} theme={book} />)}
        </div>
      </Container>
    );
}

export default Search;
