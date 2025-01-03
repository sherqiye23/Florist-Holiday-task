import { Container } from "react-bootstrap";

export default function ContactUs() {
    return (
        <Container>
            <div className="flex flex-col relative lg:flex-row">
                <div className="h-[535px] relative">
                    <img src="https://preview.colorlib.com/theme/florist/img/about/about-video.jpg.webp" alt="video" className="h-full w-full object-cover" />
                    <span className="text-[#f45d96] absolute top-[45%] left-[45%] p-4 rounded-[50%] bg-white hover:cursor-pointer">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                    </span>
                </div>
                <div 
                className="bg-white h-full p-5 lg:shadow-[0_15px_100px_0px_rgba(0,0,0,0.3)] lg:w-[50%] lg:absolute lg:right-0 lg:bottom-[50px]">
                    <h5 className="text-[#f45d96]">SLOW FLOWERS' FLORAL INSIGHTS</h5>
                    <h1 className="text-5xl my-4">Dried flowers are having a renaissance</h1>
                    <p className="text-gray-500 text-lg">This awareness has been stimulated by sustainable sourcing practices and the desire on the part of North American flower growers to “extend the season” beyond the last frost.</p>
                    <button className='text-white font-semibold rounded-3xl px-4 py-2 bg-[#f45d96]'>CONTACT US</button>
                </div>
            </div>
        </Container>
    )
}