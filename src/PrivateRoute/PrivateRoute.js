import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Pages/Shared/Loading/Loading';
import auth from '../Firebase/firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const PrivateRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    if (user.providerData[0]?.providerId === 'password' && !user.email.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className='text-danger'>Your email is not verified.</h3>
            <h4 className='text-success'>Please verify your email address.</h4>
            <button className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}>Verify Again</button>
            <ToastContainer></ToastContainer>
        </div >
    }
    return children;
};

export default PrivateRoute;