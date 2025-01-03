import leftBg from "../../../assets/left-bg.png"
import rightBg from "../../../assets/right-bg.png"

export default function BusinessmanMessage() {
    return (
        <div
            className="flex items-center justify-center py-[100px] bg-no-repeat bg-cover bg-[#F7F5FA] relative h-[70vh]">
            <img src={leftBg} alt="." className="absolute top-0 left-0 z-0 hidden md:block" />
            <img src={rightBg} alt="." className="absolute right-0 bottom-0 z-0 hidden md:block" />

            <div className="flex items-center justify-center flex-col max-w-[900px] mx-2 z-10 ">
                <div className="text-[#f45d96] text-7xl">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
                </div>
                <p className="text-center text-gray-700 text-xl italic my-3 sm:text-3xl">
                    “I just wanted to say thank you for making such gorgeous arrangements for our
                    birthday celebration. I couldn’t get over how perfect they were for the
                    party. You did a fantastic job, and I appreciate it very much”
                </p>
                <h4>Alejandro Houston</h4>
                <span className="text-gray-400">BUSINESSMAN</span>
            </div>
        </div>
    )
}