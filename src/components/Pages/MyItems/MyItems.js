import React from 'react';
import useProducts from '../../hooks/useProducts';

const MyItems = () => {
    const [products, setProducts] = useProducts();
    const handleDeleteItem = id => {
        const confirmDelete = window.confirm('Are you sure? You want to delete it.');
        if (confirmDelete) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remain = products.filter(product => product._id !== id);
                    setProducts(remain)
                });
        }
    }
    return (
        <div className='container'>
            <h2 className='mt-3'>Manage Inventory Items</h2>
            <div className="row">
                {
                    products.map(product => <div className='g-5 col-sm-12 col-md-6 col-lg-4' key={product._id}>
                        <div className='card'>
                            <img src={product.imgUrl} alt="" />
                            <div className='card-body'>
                                <h5 className='card-title'>{product.name}</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>Price: {product.price}</h6>
                                <h6 className='card-subtitle mb-2 text-muted'>Quantity: {product.quantity}</h6>
                                <button className='btn btn-danger' onClick={() => handleDeleteItem(product._id)}>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;