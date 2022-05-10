import React from 'react';
import useProducts from '../../hooks/useProducts';

const Inventory = () => {
    const [products, setProducts] = useProducts();

    const handleDelivered = id => {
        console.log('item clicked');
    }
    return (
        <div className='container'>
            <h2>Inventory</h2>
            <div className='w-50 mx-auto'>
                <form>
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
                {
                    products.map(product => <div className='g-5 col-sm-12 col-md-6 col-lg-4' key={product._id}>
                        <div className='card'>
                            <img src={product.imgUrl} alt="" />
                            <div className='card-body'>
                                <h5 className='card-title'>{product.name}</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>Description: {product.description}</h6>
                                <h6 className='card-subtitle mb-2 text-muted'>Supplier: {product.supplier}</h6>
                                <h6 className='card-subtitle mb-2 text-muted'>Price: {product.price}</h6>
                                <h6 className='card-subtitle mb-2 text-muted'>Quantity: {product.quantity}</h6>
                                <button className='btn btn-success' onClick={() => handleDelivered(product._id)}>Delivered</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Inventory;