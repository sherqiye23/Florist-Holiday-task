import { useContext, useEffect, useState } from "react"
import { FavoritesContext } from "../../../context/Favorites"
import { Container } from "react-bootstrap"
import { BasketContext } from "../../../context/Basket"
import Swal from "sweetalert2"
import { Helmet } from "react-helmet"

export default function Favorites() {
    let { favorites, setFavorites } = useContext(FavoritesContext)
    let { basket, setBasket } = useContext(BasketContext)
    let [allFavorites, setAllFavorites] = useState([])

    useEffect(() => {
        setAllFavorites(favorites)
    }, [favorites])

    // add basket
    const handleBasket = (favorite) => {
        let findBasket = basket.find(item => item.id == favorite.id);
        if (findBasket) {
            findBasket.count++
            setBasket([...basket])
            swal(`${favorite.name} məhsulunun sayı 1 vahid artırıldı!`, "", "success");
        } else {
            setBasket([...basket, { ...favorite, count: 1 }])
            swal(`${favorite.name} səbətinizə əlavə edildi!`, "", "success");
        }
    }

    // delete favorites
    const deleteFavorites = (favorite) => {
        Swal.fire({
            title: `${favorite.name} məhsulunu favoritesdən silmək istəyirsiz?`,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "Cancel",
            icon: 'warning'
        }
        ).then((result) => {
            if (result.isConfirmed) {
                let filter = favorites.filter(item => item.id != favorite.id)
                setFavorites(filter)
                Swal.fire(`${favorite.name} silindi`, '', 'success');
            }
        })

    }

    // sort
    const handleSort = (e) => {
        let sortedData;
        switch (e.target.value) {
            case "1":
                sortedData = allFavorites.toSorted((a, b) => a.price - b.price)
                setAllFavorites(sortedData);
                break;

            case "2":
                sortedData = allFavorites.toSorted((a, b) => b.price - a.price)
                setAllFavorites(sortedData);
                break;

            case "3":
                sortedData = allFavorites.toSorted((a, b) => a.name.localeCompare(b.name))
                setAllFavorites(sortedData);
                break;

            case "4":
                sortedData = allFavorites.toSorted((a, b) => b.name.localeCompare(a.name))
                setAllFavorites(sortedData);
                break;

            default:
                setAllFavorites(favorites);
                break;
        }
    }

    // search
    const handleSearch = (e) => {
        const searchValue = e.target.value.trim().toLowerCase();
        if (searchValue == "") {
            setAllFavorites(favorites)
        } else {
            const searchFav = favorites.filter(fav =>
                fav.name.toLowerCase().startsWith(searchValue)
            );
            setAllFavorites(searchFav);
        }
    }

    // clear
    const handleClear = () => {
        Swal.fire({
            title: 'Favorites səhifəsindəki bütün məhsulları silmək istəyirsiz?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "Cancel",
            icon: 'warning'
        }
        ).then((result) => {
            if (result.isConfirmed) {
                setFavorites([])
                Swal.fire('Bütün məhsullar silindi', '', 'success');
            }
        })
    }

    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="/src/assets/logo-heart.png" />
                <title>My Favorites</title>
            </Helmet>
            <Container>
                {
                    !favorites.length ? (
                        <h1 className="h-[29vh] flex justify-center items-center">
                            <span>Sizin favorites səhifənizdə məhsul yoxdur🌸</span>
                        </h1>
                    ) : (
                        <>
                            <div className="mb-5">
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
                                <button onClick={() => handleClear()}
                                    className="px-4 py-1 mx-3 rounded-5 font-semibold bg-[#f45d96] text-white text-lg">
                                    Clear Favorites
                                </button>
                            </div>
                            <div className="grid gap-6 my-5 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
                                {
                                    allFavorites.map((favorite) => (
                                        <div key={favorite.id} className="shadow-[0_15px_30px_0px_rgba(0,0,0,0.3)]">
                                            <div className="sm:h-[350px]">
                                                <img src={favorite.image} alt="flower" className="w-full h-full object-cover" />
                                            </div>

                                            <div className="flex items-center justify-between p-2">
                                                <span className="p-2 rounded-[50%] favpage"
                                                    onClick={() => deleteFavorites(favorite)}>
                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path><path d="M12 6l-2 4l4 3l-2 4v3"></path></svg>
                                                </span>
                                                <div className="flex flex-col items-center justify-center">
                                                    <span className="text-xl text-center font-semibold">{favorite.name}</span>
                                                    <span className="font-bold">${favorite.price}</span>
                                                </div>
                                                <span className="p-2 rounded-[50%] favpage"
                                                    onClick={() => handleBasket(favorite)}>
                                                    <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg>
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    )
                }
            </Container>
        </>
    )
}