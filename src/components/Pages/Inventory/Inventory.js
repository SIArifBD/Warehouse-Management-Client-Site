import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';

const Inventory = () => {
    const { productId } = useParams();
    const [product, setProduct] = useProductDetails(productId);
    // const [product, setProduct] = useState({});

    // useEffect(() => {
    //     if (productId != undefined) {
    //         const url = `http://localhost:5000/product/${productId}`;
    //         fetch(url).then(res => res.json()).then(data => setProduct(data));
    //     }
    // }, [productId]);

    const handleDelivered = () => {
        const deliverQty = product.quantity - 1;
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(deliverQty)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data);
                alert('Successfully Updated');
            })
    }
    // const onRestockSubmit = values => {
    //     // const qty = values.target.qty.value;
    //     // console.log(qty)
    //     // if (qty != undefined && qty > 0) {
    //     //     product.quantity = product.quantity + qty
    //     //     setProduct(product)
    //     // }
    // }
    const onRestockSubmit = event => {
        event.preventDefault();

        const qty = event.target.qty.value;
        // console.log(qty);
        if (qty != undefined && qty > 0) {
            product.quantity = product.quantity + qty;
            setProduct(product);
        }
    }
    return (
        <div className='container'>
            <h2>Inventory</h2>
            <div className='w-50 mx-auto'>
                <form onSubmit={onRestockSubmit}>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Quantity</span>
                        <input type="text" name='qty' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="d-grid col-6 mx-auto" role="group" aria-label="Basic example">
                        <button type="submit" className="btn btn-primary">Restock</button>
                    </div>
                </form>
            </div>
            <h2 className='mt-5'>Product Description</h2>
            <div className="row">
                <div className='col'>
                    <div className='card'>
                        <img src={product.imgUrl} alt="" />
                        <div className='card-body'>
                            <h5 className='card-title'>{product.name}</h5>
                            <h6 className='card-subtitle mb-2 text-muted'>Description: {product.description}</h6>
                            <h6 className='card-subtitle mb-2 text-muted'>Price: {product.price}</h6>
                            <h6 className='card-subtitle mb-2 text-muted'>Quantity: {product.quantity}</h6>
                            <button className='btn btn-success' onClick={() => handleDelivered(product._id)}>Delivered</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;