import { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { FlowersContext } from "../../../context/Flowers";
import { NavLink } from "react-router";
import Swal from "sweetalert2"
import axios from "axios";
import flowersUrl from "../../../assets/js/flowersUrl";

export default function Products() {
    let { flowers, setFlowers, loader } = useContext(FlowersContext);
    let [allFlowers, setAllFlowers] = useState([])

    useEffect(() => {
        setAllFlowers(flowers)
    }, [flowers])

    async function deleteFunction(id) {
        await axios.delete(flowersUrl + id).then(() => {
            let filtered = flowers.filter(flower => flower.id != id)
            setFlowers(filtered);
        })
    }

    const handleDelete = (element) => {
        Swal.fire({
            title: `${element.name} məhsulunu silmək istəyirsiz?`,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "Cancel",
            icon: 'warning'
        }
        ).then((result) => {
            if (result.isConfirmed) {
                deleteFunction(element.id)
                Swal.fire(`${element.name} silindi`, '', 'success');
            }
        })
    }

    // sort
    const handleSort = (e) => {
        let sortedData;
        switch (e.target.value) {
            case "1":
                sortedData = allFlowers.toSorted((a, b) => a.price - b.price)
                setAllFlowers(sortedData);
                break;

            case "2":
                sortedData = allFlowers.toSorted((a, b) => b.price - a.price)
                setAllFlowers(sortedData);
                break;

            case "3":
                sortedData = allFlowers.toSorted((a, b) => a.name.localeCompare(b.name))
                setAllFlowers(sortedData);
                break;

            case "4":
                sortedData = allFlowers.toSorted((a, b) => b.name.localeCompare(a.name))
                setAllFlowers(sortedData);
                break;

            default:
                setAllFlowers(flowers);
                break;
        }
    }

    // search
    const handleSearch = (e) => {
        const searchValue = e.target.value.trim().toLowerCase();
        if (searchValue == "") {
            setAllFlowers(flowers)
        } else {
            const searchFlower = flowers.filter(flower =>
                flower.name.toLowerCase().startsWith(searchValue)
            );
            setAllFlowers(searchFlower);
        }
    }

    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="/src/assets/adminlogo.png" />
                <title>Admin Products</title>
            </Helmet>
            {
                loader ? (
                    <div className="flex items-center justify-center h-[30vh]">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <Container>
                        <div className="mt-5">
                            <input type="text" className="border border-solid border-black p-1 mr-3"
                                onChange={handleSearch} />
                            <select className="px-2 py-1 border border-solid border-black rounded-2"
                                onChange={(e) => handleSort(e)}>
                                <option selected>Open this select sort</option>
                                <option value="1">First Cheap</option>
                                <option value="2">First Expensive</option>
                                <option value="3">A-Z</option>
                                <option value="4">Z-A</option>
                            </select>
                        </div>
                        <NavLink to={"add"}>
                            <button className="mt-2 mb-3 py-2 px-5 border-2 border-lime-500 text-lime-500 text-lg rounded-5 font-bold ease-in duration-200 transition-all hover:bg-lime-500 hover:text-white">
                                Add Product
                            </button>
                        </NavLink>
                        <div className="overflow-x-auto">
                            <Table striped bordered hover className="mb-5 text-lg" style={{ userSelect: "none" }}>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Info</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allFlowers.map((element) => (
                                            <tr key={element.id} >
                                                <td className="w-[120px] h-[160px]">
                                                    <img src={element.image} alt="image" className="w-[100px] h-[140px]" />
                                                </td>
                                                <td>{element.name}</td>
                                                <td>${element.price.toFixed(2)}</td>
                                                <td>
                                                    <NavLink
                                                        className="no-underline"
                                                        to={`detail/${element.id}`}>
                                                        <button
                                                            className="py-1 px-4 border-2 border-blue-400 text-blue-400 rounded-5 font-bold ease-in duration-200 transition-all hover:bg-blue-400 hover:text-white">
                                                            Info
                                                        </button>
                                                    </NavLink>
                                                </td>
                                                <td>
                                                    <NavLink
                                                        className="no-underline"
                                                        to={`edit/${element.id}`}>
                                                        <button
                                                            className="py-1 px-4 border-2 border-orange-400 text-orange-400 rounded-5 font-bold ease-in duration-200 transition-all hover:bg-orange-400 hover:text-white">
                                                            Edit
                                                        </button>
                                                    </NavLink>
                                                </td>
                                                <td>
                                                    <button
                                                        onClick={() => handleDelete(element)}
                                                        className="py-1 px-4 border-2 border-red-400 text-red-400 rounded-5 font-bold ease-in duration-200 transition-all hover:bg-red-400 hover:text-white" >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Container>
                )
            }
        </>
    )
}