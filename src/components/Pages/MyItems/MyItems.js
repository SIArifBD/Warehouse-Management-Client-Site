import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import useProducts from '../../hooks/useProducts';
import axiosPrivate from '../../Api/axiosPrivate';
import { signOut } from 'firebase/auth';
import { SortOrder } from 'react-data-table-component';

const MyItems = () => {
    // const [user] = useAuthState(auth);
    const [products, setProducts] = useProducts();
    // const navigate = useNavigate();
    const handleDeleteItem = id => {
        const confirmDelete = window.confirm('Are you sure? You want to delete it.');
        if (confirmDelete) {
            const url = `https://intense-depths-80254.herokuapp.com/product/${id}`;
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
    // useEffect(() => {
    //     const getUserBasisUpload = async () => {
    //         const email = user?.email;
    //         const url = `https://intense-depths-80254.herokuapp.com/product/product?email=${email}`;
    //         try {
    //             const { data } = await axiosPrivate.get(url);
    //             setProducts(data);
    //         }
    //         catch (error) {
    //             console.log(error.messsage);
    //             if (error.response.status === 401 || error.response.status === 403) {
    //                 signOut(auth);
    //                 navigate('/login');
    //             }
    //         }
    //     }
    //     getUserBasisUpload();
    // }, [user]);
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
            {/* <h2>{user.displayName} Uploaded Product Total: {products.length}</h2>
            {
                products.map(product => <div key={product._id}>
                    <p>{product.email}</p>
                </div>)
            } */}
        </div>
    );
};

export default MyItems;