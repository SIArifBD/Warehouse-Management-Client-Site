import React from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();

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
    ]
    return (
        <div className='container'>
            <h2 className='mt-5'>Manage Inventory Items</h2>
            <DataTable columns={columns} data={products} />
            <Link to='/uploadPd'>
                <button className='btn btn-primary mx-auto d-block my-3 text-decoration-none'>Add New Item</button>
            </Link>
        </div>
    );
};

export default ManageInventory;