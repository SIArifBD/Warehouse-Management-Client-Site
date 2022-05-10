import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, imgUrl, description, price, quantity, supplier } = product;
    const navigate = useNavigate();

    const navigateToItemManage = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Description: {description}</p>
                    <p className='card-text'>Price: ${price}</p>
                    <p className="card-text">Quantity: {quantity}</p>
                    <p className='card-text'>Supplier: {supplier}</p>
                    {/* <button onClick={() => navigateToItemManage(_id)} className='btn btn-primary'>Stock Update</button> */}
                    <Link to='/inventory'>
                        <button onClick={() => navigateToItemManage(_id)} className='btn btn-primary'>Stock Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;