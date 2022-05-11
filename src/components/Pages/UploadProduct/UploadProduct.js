import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';

const UploadProduct = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleUpload = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const imgUrl = event.target.url.value;
        const description = event.target.des.value;
        const price = event.target.price.value;
        const quantity = event.target.qty.value;
        const supplier = event.target.supplier.value;

        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name, imgUrl, description, price, quantity, supplier
            }),
            headers: {
                'authorization': `${user.email} ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
            })
    };
    return (
        <div className='container'>
            <h2>Upload Product Here</h2>
            <div className='w-50 mx-auto'>
                <form onSubmit={handleUpload}>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Product Name</span>
                        <input type="text" name='name' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Img URL</span>
                        <input type="text" name='url' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Description</span>
                        <textarea type="text-area" name='des' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Price</span>
                        <input type="text" name='price' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Quantity</span>
                        <input type="text" name='qty' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Supplier Name</span>
                        <input type="text" name='supplier' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="d-grid col-6 mx-auto" role="group" aria-label="Basic example">
                        <button type="submit" className="btn btn-primary">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadProduct;