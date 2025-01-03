import { Container } from "react-bootstrap";

export default function AboutUs() {
    return (
        <Container>
            <div className="flex flex-col gap-6 py-10 md:flex-row">
                <div className="lg:pr-[80px] md:w-[40%]">
                    <h6 className="text-[#F45E96]">ABOUT US</h6>
                    <h1 className="text-5xl">We provide all kinds of fresh flower services</h1>
                </div>
                <div className="text-gray-700 text-lg md:w-[60%]">
                    For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada, growing flowers that can be dried and incorporated into late fall and winter floral arrangements has been a game-changer. During her growing season, this farmer-florist relies on a vivid palette of annuals, perennials and ornamental grasses to supply her studio.
                </div>
            </div>
        </Container>
    )
}