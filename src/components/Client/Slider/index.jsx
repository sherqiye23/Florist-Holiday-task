import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
    return (
        <Carousel fade>
            <Carousel.Item className='relative'>
                <img src="https://preview.colorlib.com/theme/florist/img/hero/hero-1.jpg.webp" style={{ height: "70vh", width: "100%", objectFit: "cover" }} alt="..." />
                <Carousel.Caption className='flex left-0 top-1/4 items-start flex-col absolute max-w-[480px] gap-2.5'>
                    <h4 className='text-black'>FRESH FLOWER & GIFT SHOP</h4>
                    <h1 className='text-black text-left'>
                        Making beautiful flowers a part of your life.
                    </h1>
                    <button className='text-white font-semibold rounded-3xl px-4 py-2 bg-[#f45d96]'>SHOP NOW</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='relative'>
                <img src="https://preview.colorlib.com/theme/florist/img/hero/hero-2.jpg.webp" alt="..." style={{ height: "70vh", width: "100%", objectFit: "cover" }} />
                <Carousel.Caption className='flex left-0 top-1/4 items-start flex-col absolute max-w-[480px] gap-2.5'>
                    <h4 className='text-black'>FRESH FLOWER & GIFT SHOP</h4>
                    <h1 className='text-black text-left'>
                        Making beautiful flowers a part of your life.
                    </h1>
                    <button className='text-white font-semibold rounded-3xl px-4 py-2 bg-[#f45d96]'>SHOP NOW</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}