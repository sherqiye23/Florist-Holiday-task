import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router";
import flowersUrl from "../../../assets/js/flowersUrl";
import { FlowersContext } from "../../../context/Flowers";

export default function DetailProduct() {
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
                <link rel="icon" type="image/svg+xml" href="/src/assets/adminlogo.png" />
                <title>Admin Detail Product</title>
            </Helmet>
            {
                loader ? (
                    <div className="flex items-center justify-center h-[30vh]">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <Container>
                        <div className="bg-[#ffeeff] rounded-4 p-2 my-5 flex flex-col md:flex-row">
                            <div className="w-full h-full md:h-[60vh] md:w-[35%]" >
                                <img src={detail.image} alt="." className="w-full h-full object-cover" />
                            </div>
                            <div className="p-5 w-full md:w-[65%]">
                                <h2>Id: {detail.id}</h2>
                                <h2>Name: {detail.name}</h2>
                                <h4>Description: {detail.description}</h4>
                                <h2>Price: ${detail.price}</h2>
                                <button onClick={() => (navigate("/admin/products"))} className="px-3 py-1 border-2 border-solid border-gray bg-white rounded-4 text-xl my-5">Back to Products</button>
                            </div>
                        </div>
                    </Container>
                )
            }

        </>
    )
}