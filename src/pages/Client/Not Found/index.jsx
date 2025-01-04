import { Helmet } from "react-helmet";

export default function NotFound() {
    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="/src/assets/errorlogo.png" />
                <title>Not Found</title>
            </Helmet>
            <div className="h-[30vh] flex items-center justify-center border-y border-gray">
                <h1 className="text-7xl">
                    404 not found :&#40;
                </h1>
            </div>
        </>

    )
}