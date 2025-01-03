import { Container } from "react-bootstrap";

export default function Hero() {
    return (
        <Container>
            <div className="grid grid-cols-1 gap-6 py-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                <div>
                    <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png.webp"/>
                    <div>
                        <h2>100% Freshness</h2>
                        <p>Most people are unaware of the less common flower</p>
                    </div>
                </div>
                <div>
                    <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png.webp" />
                    <div>
                        <h2>Made by artist</h2>
                        <p>Most people are unaware of the less common flower</p>
                    </div>
                </div>
                <div>
                    <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png.webp" />
                    <div>
                        <h2>Own courier</h2>
                        <p>Most people are unaware of the less common flower</p>
                    </div>
                </div>
                <div>
                    <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-4.png.webp" />
                    <div>
                        <h2>100% Freshness</h2>
                        <p>Most people are unaware of the less common flower</p>
                    </div>
                </div>
            </div>


        </Container>
    )
}