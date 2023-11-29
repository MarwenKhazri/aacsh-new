import Hero from "../Hero/Hero"
import WhyUs from "../WhyUs/WhyUs";
import '../../index.css';
import Specialities from "../Specialities/Specialities";
import FeatureList from "../FeatureList/FeatureList";
import DoctorsList from "../DoctorsList/DoctorsList";
import Gallery from "../Gallery/Gallery";
import { Container, Row, Col } from 'react-bootstrap'; // Assuming you are using react-bootstrap


function Home({ onComponentChange }) {
    return (
        <div>
            <Hero />
            <main id="main">
                <WhyUs />
                {/* <Specialities /> */}
                <FeatureList onComponentChange={onComponentChange}/>
                <DoctorsList />
                <Gallery />
            </main>
        </div>
    )
}

export default Home