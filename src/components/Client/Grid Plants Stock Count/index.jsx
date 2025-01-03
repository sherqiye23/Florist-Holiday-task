import { Container } from "react-bootstrap";

export default function PlantsItems() {
    return (
        <Container>
            <div className="py-2 grid grid-cols-1 gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                <div className="relative h-[440px]">
                    <div className="h-full w-full">
                        <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-1.jpg.webp" alt="1" className="object-cover h-full w-full"/>
                    </div>
                    <div className="bg-white text-black flex flex-col items-center py-3 absolute bottom-4 inset-x-4">
                        <p className="text-3xl font-medium -mb-1">Fresh Flower</p>
                        <div className="text-gray-600"> &#40; 25 items &#41; </div>
                    </div>
                </div>
                <div className="relative h-[440px]">
                    <div className="h-full w-full">
                        <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-2.jpg.webp" alt="2" className="object-cover h-full w-full"/>
                    </div>
                    <div className="bg-white text-black flex flex-col items-center py-3 absolute bottom-4 inset-x-4">
                        <p className="text-3xl font-medium -mb-1">Succulent plants</p>
                        <div className="text-gray-600"> &#40; 162 items &#41; </div>
                    </div>
                </div>
                <div className="relative h-[440px]">
                    <div className="h-full w-full">
                        <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-3.jpg.webp" alt="3" className="object-cover h-full w-full"/>
                    </div>
                    <div className="bg-white text-black flex flex-col items-center py-3 absolute bottom-4 inset-x-4">
                        <p className="text-3xl font-medium -mb-1">Cactus plants</p>
                        <div className="text-gray-600"> &#40; 58 items &#41; </div>
                    </div>
                </div>
                <div className="relative h-[440px]">
                    <div className="h-full w-full">
                        <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-4.jpg.webp" alt="4" className="object-cover h-full w-full"/>
                    </div>
                    <div className="bg-white text-black flex flex-col items-center py-3 absolute bottom-4 inset-x-4">
                        <p className="text-3xl font-medium -mb-1">Funiture tree</p>
                        <div className="text-gray-600"> &#40; 25 items &#41; </div>
                    </div>
                </div>
            </div>


        </Container>
    )
}