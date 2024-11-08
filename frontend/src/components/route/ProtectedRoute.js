import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom';
import Loader from '../layouts/Loader';

export default function ProtectedRoute ({children, isAdmin}) {
    const { isAuthenticated, loading, user } = useSelector(state => state.authState)

    if(!isAuthenticated && !loading) {
        return <Navigate to="/login" />
    }

    if(loading) {
        return <Loader/>
    }

   
}