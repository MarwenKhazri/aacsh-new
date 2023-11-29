import Counter from "../Counter/Counter"
import About from "../About/About"
import { Container, Row, Col } from 'react-bootstrap'; // Assuming you are using react-bootstrap
import Testimonials from "../Testimonials/Testimonials";
import FrequentlyAsked from "../FrequentlyAsked/FrequentlyAsked";
function AboutUs() {

    return (
        <div>
            <Row style={{marginTop: "100px"}}><About /></Row>
            <Row><Counter /></Row>
            <Row><Testimonials /></Row>
            <Row><FrequentlyAsked /></Row>
            
        </div>
    )
}

export default AboutUs