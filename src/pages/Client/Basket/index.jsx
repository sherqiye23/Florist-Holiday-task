import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BasketContext } from "../../../context/Basket";
import Table from 'react-bootstrap/Table';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

export default function Basket() {
    let { basket, setBasket } = useContext(BasketContext)
    let [total, setTotal] = useState(0)

    useEffect(() => {
        let total = basket.reduce((sum, total) => sum + (total.price * total.count), 0)
        setTotal(total.toFixed(2))
    }, [basket])

    const handleDecrease = (element) => {
        if (element.count > 1) {
            element.count--
            setBasket([...basket])
        } else {
            let filter = basket.filter((item) => item.id != element.id)
            setBasket(filter)
        }
    }

    const handleIncrease = (element) => {
        element.count++
        setBasket([...basket])
    }

    const handleDelete = (element) => {
        Swal.fire({
            title: `${element.name} məhsulunu səbətinizdən silmək istəyirsiz?`,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "Cancel",
            icon: 'warning'
        }
        ).then((result) => {
            if (result.isConfirmed) {
                let filter = basket.filter((item) => item.id != element.id)
                setBasket(filter)
                Swal.fire(`${element.name} səbətinizdən silindi`, '', 'success');
            }
        })
    }

    const handleClear = () => {
        Swal.fire({
            title: 'Səbətdəki bütün məhsulları silmək istəyirsiz?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "Cancel",
            icon: 'warning'
        }
        ).then((result) => {
            if (result.isConfirmed) {
                setBasket([])
                Swal.fire('Bütün məhsullar silindi', '', 'success');
            }
        })
    }

    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="/src/assets/6644893.png" />
                <title>My Basket</title>
            </Helmet>

            <Container>
                {
                    !basket.length ? (
                        <h1 className="h-[29vh] flex justify-center items-center">
                            <span>Sizin basket səhifənizdə məhsul yoxdur🛒</span>
                        </h1>
                    ) : (
                        <>
                            <div className="overflow-x-auto">
                                <Table striped bordered hover className="my-5 text-lg" style={{ userSelect: "none" }}>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Total Price</th>
                                            <th>Decrease</th>
                                            <th>Count</th>
                                            <th>Increase</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            basket.map((element) => (
                                                <tr key={element.id} >
                                                    <td className="w-[120px] h-[160px]">
                                                        <img src={element.image} alt="image" className="w-[100px] h-[140px]" />
                                                    </td>
                                                    <td>{element.name}</td>
                                                    <td>${element.price.toFixed(2)}</td>
                                                    <td>${(element.price * element.count).toFixed(2)}</td>
                                                    <td>
                                                        <span className="inline-block p-3" onClick={() => handleDecrease(element)}>
                                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                                                        </span>
                                                    </td>
                                                    <td>{element.count}</td>
                                                    <td>
                                                        <span className="inline-block p-3" onClick={() => handleIncrease(element)}>
                                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="text-[#ff0000] inline-block p-3" onClick={() => handleDelete(element)}>
                                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            <div className="flex items-center justify-between">
                                <h1>Total Price: ${total}</h1>
                                <button onClick={() => handleClear()}
                                    className="px-4 py-2 rounded-5 font-semibold bg-[#f45d96] text-white text-lg">Clear Basket
                                </button>
                            </div>
                        </>
                    )
                }
            </Container>
        </>

    )
}