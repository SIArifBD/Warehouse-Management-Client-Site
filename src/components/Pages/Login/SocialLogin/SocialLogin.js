import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase/firebase.init';
import useToken from '../../../hooks/useToken';
import googleLogo from '../../../images/social/google.png'
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (token) {
        navigate(from, { replace: true });
    }
    return (
        <>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className='d-grid col-6 col-12 mx-auto'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '20px' }} src={googleLogo} alt="" />
                    <span className='px-2'>Google</span>
                </button>
            </div>
        </>
    );
};

export default SocialLogin;