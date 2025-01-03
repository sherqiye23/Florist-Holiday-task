import { Container } from "react-bootstrap";


export default function OurFlowers() {
    return (
        <Container>
            <div className="my-5 max-w-[700px] mx-auto my-0 flex-col flex items-center justify-center">
                <h5 className="text-[#f45d96]">OUR FLOWER</h5>
                <h1>New Arrivals</h1>
                <div className="flex justify-center items-center gap-6 flex-wrap">
                    <span className="border-2 border-solid px-2 border-[#f45d96]">All</span>
                    <span>Bouquet</span>
                    <span>Flower box</span>
                    <span>Flower shelf</span>
                    <span>Basket of flower</span>
                    <span>Gift combos</span>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2.5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                <div className="relative our-flower">
                    <div>
                        <img src="https://preview.colorlib.com/theme/florist/img/product/product-1.jpg.webp" alt="1" className="w-full h-full" />
                    </div>
                    <div className="flex gap-2.5 items-center justify-center py-3 
                        absolute w-full translate-y-full hidden-icons">
                        <span className="px-3 py-3 rounded-[50%]">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                        </span>
                        <span className="px-3 py-3 rounded-[50%]">
                            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg>
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2">
                        <span className="text-xl font-semibold">Fly Me To The Moon</span>
                        <span className="font-bold">$27.50</span>
                    </div>
                </div>

                <div className="relative our-flower">
                    <div>
                        <img src="https://preview.colorlib.com/theme/florist/img/product/product-1.jpg.webp" alt="1" className="w-full h-full" />
                    </div>
                    <div className="flex gap-2.5 items-center justify-center py-3 
                        absolute w-full translate-y-full hidden-icons">
                        <span className="px-3 py-3 rounded-[50%]">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                        </span>
                        <span className="px-3 py-3 rounded-[50%]">
                            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg>
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2">
                        <span className="text-xl font-semibold">Fly Me To The Moon</span>
                        <span className="font-bold">$27.50</span>
                    </div>
                </div><div className="relative our-flower">
                    <div>
                        <img src="https://preview.colorlib.com/theme/florist/img/product/product-1.jpg.webp" alt="1" className="w-full h-full" />
                    </div>
                    <div className="flex gap-2.5 items-center justify-center py-3 
                        absolute w-full translate-y-full hidden-icons">
                        <span className="px-3 py-3 rounded-[50%]">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                        </span>
                        <span className="px-3 py-3 rounded-[50%]">
                            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg>
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2">
                        <span className="text-xl font-semibold">Fly Me To The Moon</span>
                        <span className="font-bold">$27.50</span>
                    </div>
                </div><div className="relative our-flower">
                    <div>
                        <img src="https://preview.colorlib.com/theme/florist/img/product/product-1.jpg.webp" alt="1" className="w-full h-full" />
                    </div>
                    <div className="flex gap-2.5 items-center justify-center py-3 
                        absolute w-full translate-y-full hidden-icons">
                        <span className="px-3 py-3 rounded-[50%]">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                        </span>
                        <span className="px-3 py-3 rounded-[50%]">
                            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg>
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2">
                        <span className="text-xl font-semibold">Fly Me To The Moon</span>
                        <span className="font-bold">$27.50</span>
                    </div>
                </div><div className="relative our-flower">
                    <div>
                        <img src="https://preview.colorlib.com/theme/florist/img/product/product-1.jpg.webp" alt="1" className="w-full h-full" />
                    </div>
                    <div className="flex gap-2.5 items-center justify-center py-3 
                        absolute w-full translate-y-full hidden-icons">
                        <span className="px-3 py-3 rounded-[50%]">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                        </span>
                        <span className="px-3 py-3 rounded-[50%]">
                            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg>
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2">
                        <span className="text-xl font-semibold">Fly Me To The Moon</span>
                        <span className="font-bold">$27.50</span>
                    </div>
                </div><div className="relative our-flower">
                    <div>
                        <img src="https://preview.colorlib.com/theme/florist/img/product/product-1.jpg.webp" alt="1" className="w-full h-full" />
                    </div>
                    <div className="flex gap-2.5 items-center justify-center py-3 
                        absolute w-full translate-y-full hidden-icons">
                        <span className="px-3 py-3 rounded-[50%]">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                        </span>
                        <span className="px-3 py-3 rounded-[50%]">
                            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg>
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2">
                        <span className="text-xl font-semibold">Fly Me To The Moon</span>
                        <span className="font-bold">$27.50</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}