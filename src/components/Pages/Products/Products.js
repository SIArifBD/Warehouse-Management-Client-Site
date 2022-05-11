import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/product`;
        fetch(url).then(res => res.json()).then(data => setProducts(data));
    }, []);
    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-5'>Smart Gadgets Inventory</h1>
            <div className="row">
                {
                    products.length > 5 ? products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>) :
                        products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <Link to='manageInventory'>
                <button disabled={products.length === 0 ? true : false} className='btn btn-primary mx-auto d-block my-3 text-decoration-none'>Manage Inventories</button>
            </Link>
        </div>
    );
};

export default Products;