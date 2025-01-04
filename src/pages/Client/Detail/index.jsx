import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import flowersUrl from "../../../assets/js/flowersUrl";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { FlowersContext } from "../../../context/Flowers";


export default function Detail() {
    let [detail, setDetail] = useState({})
    let { id } = useParams()
    let navigate = useNavigate()

    let { loader, setLoader } = useContext(FlowersContext);

    function GetFlower() {
        axios.get(flowersUrl + id).
            then((res) => {
                setDetail(res.data)
                setLoader(false);
            }).catch(() => {
                navigate("*")
            })
    }

    useEffect(() => {
        GetFlower()
    }, [id])

    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="/src/assets/flow-logo.png" />
                <title>Flower Info</title>
            </Helmet>

            {
                loader ? (
                    <div className="flex items-center justify-center h-[30vh]">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <Container>
                        <div className="bg-[#ffeeee] rounded-4 p-2 my-5 flex flex-col md:flex-row">
                            <div className="w-full h-full md:h-[60vh] md:w-[35%]" >
                                <img src={detail.image} alt="." className="w-full h-full object-cover" />
                            </div>
                            <div className="p-5 w-full md:w-[65%]">
                                <h1>{detail.name}</h1>
                                <h4>{detail.description}</h4>
                                <h2>Qiymət: ${detail.price}</h2>
                                <button onClick={() => (navigate("/"))} className="px-3 py-1 border-2 border-solid border-gray bg-white rounded-4 text-xl my-5">Back to Home page</button>
                            </div>
                        </div>
                    </Container>
                )
            }
        </>
    )
}