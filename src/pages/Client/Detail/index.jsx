import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import flowersUrl from "../../../assets/js/flowersUrl";
import { Container } from "react-bootstrap";


export default function Detail() {
    let [detail, setDetail] = useState({})
    let { id } = useParams()
    let navigate = useNavigate()

    function GetFlower() {
        axios.get(flowersUrl + id).then((res) => setDetail(res.data))
    }

    useEffect(() => {
        GetFlower()
    }, [id])

    return (
        <Container>
            <div className="bg-[#ffe3ee] rounded-4 p-2 my-5 flex flex-col md:flex-row">
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