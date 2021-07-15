import { Container } from "react-bootstrap"
import FooterColumn from "./FooterColumn"

function Footer() {
    return (
        <footer className="row BGFooter">
            <Container>
                <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
    
                <FooterColumn title1="About" title2="Browse" />
                <FooterColumn title1="Shop" title2="Find us"/>

                
                </div>
            </Container>
        </footer>
    )
}

export default Footer
