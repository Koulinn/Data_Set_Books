import { Container } from "react-bootstrap"
import Cardp from "./Cardp"

function Section(props) {
    let slicedBooks = props.theme.slice(props.slInitial, props.slFinal)
  
    return (
        <Container className="xtra-topMargin px-0">
            <h2 className="mb-5 mx-0 px-3">
                {props.title}
            </h2>
            <div className="row row-cols-sm-2 row-cols-md-2 row-cols-lg-4 px-3">
                { slicedBooks.map((theme) => (
                    <Cardp
                    getUserSelectedBook={props.getUserSelectedBook} 
                    getDisplayedBook={props.getDisplayedBook}
                    key = {theme.asin}
                    theme = {theme} 
                    />

                )) }
            </div>

        </Container>
    )
}

export default Section
