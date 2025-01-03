import { Helmet } from "react-helmet";
import Slider from "../../../components/Client/Slider";
import Hero from "../../../components/Client/Hero";
import PlantsItems from "../../../components/Client/Grid Plants Stock Count";
import AboutUs from "../../../components/Client/About us section";
import ContactUs from "../../../components/Client/Contact us section";
import CustomFlower from "../../../components/Client/Custom Flower";
import FooterFlowers from "../../../components/Client/Footer Flowers";
import BusinessmanMessage from "../../../components/Client/Businessman message";

export default function Home() {
    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="/src/assets/flow-logo.png" />
                <title>Florist🌸</title>
            </Helmet>

            <Slider/>
            <Hero/>
            <PlantsItems/>
            <AboutUs/>
            <ContactUs/>
            {/* guller olacaq burda axira saxla */}
            <CustomFlower/>

            <BusinessmanMessage/>
            <FooterFlowers/>
        </>
    )
}