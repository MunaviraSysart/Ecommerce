import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

export const ProductDetails = () => {
    const { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(true);
    const [data, setData] = useState();
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    useEffect(() => {
        const fetchProductById = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
                .catch(err => console.log(err))
            response && setData(response?.data)
            setIsLoaded(false)
        }
        fetchProductById();
    }, [])

    //console.log('data', data)
    //console.log('cart', cart)

    //add to cart
    const addToCart = (data) =>{
        cart.push({ id: data.id, title: data.title, category: data.category, price: data.price});
        localStorage.setItem("cart", JSON.stringify(cart))
        window.location.reload();
    }

    return isLoaded ? (
        <div className="loading" />
    ) : (
        <div className='product'>
            <div className="row">
                <div className="col-md-4">
                    <img src={data?.image} alt={data?.title} height="400px" width="400px" />
                </div>
                <div className="col-md-8" style={{ paddingTop: '10px' }}>
                    <h4 className="text-uppercase text-black-50">{data?.category}</h4>
                    <h2>{data?.title}</h2>
                    <p className="lead fw-bolder">
                        <i>Rating:  {data.rating && data.rating.rate}</i>
                    </p>
                    <h5 className="display-6 fw-bold my-4">
                        $ {data.price}
                    </h5>
                    <p className="lead">{data.description}</p>
                    <Button size="lg" variant="dark" onClick={() => addToCart(data)}>
                        <BsCart4 color='blue' size="35px" />Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}
