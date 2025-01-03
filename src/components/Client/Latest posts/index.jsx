import { Container } from "react-bootstrap";

export default function LatestPosts() {
    return (
        <Container>
            <div className="flex justify-between items-center my-5 flex-col sm:flex-row">
                <div>
                    <h5 className="text-[#f45d96]">LATEST POST</h5>
                    <h1>Florist tricks</h1>
                </div>
                <button className='border-2 border-solid border-[#f45d96] font-semibold rounded-3xl px-5 py-2'>VIEW ALL POSTS</button>
            </div>
            <div className="grid grid-cols-1 gap-6 mb-5 lg:grid-cols-3 md:grid-cols-2">
                <div className="shadow-[0_15px_50px_0px_rgba(0,0,0,0.3)] flower-card">
                    <div>
                        <img src="https://preview.colorlib.com/theme/florist/img/blog/blog-1.jpg.webp" alt="1" className="w-full" />
                    </div>
                    <div className="flex flex-col justify-center items-center text-center py-4 px-5 relative">
                        <span className="text-white p-1 px-2 text-sm font-semibold absolute top-[-10px]">TREND NEWS</span>
                        <div className="text-2xl font-semibold">8 Romantic Gifts to Celebrate Your Wedding Anniversary</div>
                        <p className="text-gray-700 font-light my-2">Flowers have a language all their own. In Victorian times, receiving a…</p>
                        <span className="text-gray-600">MAY 22, 2020</span>
                    </div>
                </div>
                <div className="shadow-[0_15px_50px_0px_rgba(0,0,0,0.3)] flower-card">
                    <div>
                        <img src="https://preview.colorlib.com/theme/florist/img/blog/blog-2.jpg.webp" alt="2" className="w-full" />
                    </div>
                    <div className="flex flex-col justify-center items-center text-center py-4 px-5 relative">
                        <span className="text-white p-1 px-2 text-sm font-semibold absolute top-[-10px]">TIPS & IDEA</span>
                        <div className="text-2xl font-semibold">Red Rose - Flower of love of Greek Mythology</div>
                        <p className="text-gray-700 font-light my-2">Flowers have a language all their own. In Victorian times, receiving a…</p>
                        <span className="text-gray-600">MAY 22, 2020</span>
                    </div>
                </div>
                <div className="shadow-[0_15px_50px_0px_rgba(0,0,0,0.3)] flower-card">
                    <div>
                        <img src="https://preview.colorlib.com/theme/florist/img/blog/blog-3.jpg.webp" alt="3" className="w-full" />
                    </div>
                    <div className="flex flex-col justify-center items-center text-center py-4 px-5 relative">
                        <span className="text-white p-1 px-2 text-sm font-semibold absolute top-[-10px]">DIY & CRAFTS</span>
                        <div className="text-2xl font-semibold">Beautiful Mandalas Made From Flowers by Kathy Klein</div>
                        <p className="text-gray-700 font-light my-2">Flowers have a language all their own. In Victorian times, receiving a…</p>
                        <span className="text-gray-600">MAY 22, 2020</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}