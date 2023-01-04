import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetRegistered } from 'features/user';
import Layout from 'components/Layout';

const LoginPage = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(resetRegistered());
    }, []);

    return (
		<Layout title='Auth Site | Login' content='Login page'>

			<div className='Auth-form-container'>
				<form className='Auth-form'>

					<div className="Auth-form-content">
						<h3 className="Auth-form-title">Login</h3>
						<div className="form-group mt-3">
							<label>Email</label>
							<input
								type="email"
								name='email'
								required
								className="form-control mt-1"
							/>
						</div>
						<div className="form-group mt-3">
							<label>Password</label>
							<input
								type="password"
								name='password'
								required
								className="form-control mt-1"
							/>
						</div>					
					
						<div className="d-grid gap-2 mt-3">
							<button type="submit" className="btn btn-primary">
								Login
							</button>
					  	</div>
					</div>
				</form>
			</div>
		</Layout>
	);
}

export default LoginPage;