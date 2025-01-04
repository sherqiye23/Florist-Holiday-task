import { Helmet } from "react-helmet";

export default function Dashboard() {
    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="/src/assets/adminlogo.png" />
                <title>Admin Page</title>
            </Helmet>
            <div className="h-[30vh] flex items-center justify-center border-y border-gray">
                <h1 className="text-7xl text-center">
                    Welcome Admin
                </h1>
            </div>
        </>

    )
}