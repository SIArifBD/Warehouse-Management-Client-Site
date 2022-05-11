import React from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();
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

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Image',
            selector: row => <img width={50} height={50} src={row.imgUrl}></img>,
        },
        {
            name: 'Quantity',
            selector: row => row.quantity,
        },
        {
            name: 'Price',
            selector: row => row.price,
        },
        {
            name: 'Action',
            selector: row => (<button className='btn btn-danger' onClick={() => handleDeleteItem(row._id)}>Delete</button>)
        },
    ]
    return (
        <div className='container'>
            <h2 className='mt-5'>Manage Inventories</h2>
            <DataTable columns={columns} data={products} />
            <Link to='/uploadPd'>
                <button className='btn btn-primary mx-auto d-block my-3 text-decoration-none'>Add New Item</button>
            </Link>
        </div>
    );
};

export default ManageInventory;