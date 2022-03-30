import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css'

export const ProductList = () => {

    const [isLoaded, setIsLoaded] = useState(true);
    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get("https://fakestoreapi.com/products")
                .catch(err => console.log(err))
            response && setProducts(response?.data)
            setIsLoaded(false)
        }
        fetchProduct();
    }, [])

    //console.log('productss', products)

    return isLoaded ? (
        <div className="loading" />
    ) : (
        <div className='banner'>
            <h2 className='text-center'>Latest Products</h2><hr />
            <Row xs={1} md={4} className="g-4">
                {products?.slice(0, 8)?.map(data => {
                    return (
                        <Col key={data.id}>
                            <Card style={{ height: '330px' }}>
                                <Card.Img variant="top" src={data.image} style={{ paddingTop: '10px', height: "150px" }} />
                                <Card.Body className='text-center'>
                                    <Card.Title>{data.title.substring(0, 20)}</Card.Title>
                                    <Card.Text>
                                        {data.category} <br />
                                        <span style={{ color: 'red' }}><b>${data.price}</b></span>
                                    </Card.Text>
                                    <Link to={`/product/${data.id}`}>
                                        <Button variant="dark" size="sm">Buy Now</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            <hr />
        </div>
    )
}
