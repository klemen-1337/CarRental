import Layout from "components/Layout";
import { useSelector, useDispatch} from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { register } from "features/user";


const RegisterPage = () => {
    const dispatch = useDispatch();
    const { registered, loading } = useSelector(state => state.user);

    const [formdata, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formdata;

    const onChange = e => {
        setFormData({...formdata, [e.target.name]: e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
        dispatch(register({username, email, password}));
    };

    if(registered) return <Navigate to='/login' />

    return (
        <Layout title='Auth Site | Register' content='Register page'>
            <h1>Register for an Account</h1>
            <form className="mt-5" onSubmit={onSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        onChange={onChange}
                        value={username}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                        className="form-control"
                        type="text"
                        name="email"
                        onChange={onChange}
                        value={email}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        onChange={onChange}
                        required
                    />
                </div>
                {loading ? (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <button className='btn btn-primary mt-4'>Register</button>
                )}
 
                
            </form>


        </Layout>
    );
}

export default RegisterPage;