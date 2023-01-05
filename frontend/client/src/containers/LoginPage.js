import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { resetRegistered, login } from 'features/user';
import Layout from 'components/Layout';

const LoginPage = () => {
    const dispatch = useDispatch();
	const { loading, isAuthenticated, registered } = useSelector(state => state.user)

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	useEffect(() =>{
		if(registered) dispatch(resetRegistered());
	}, [registered]);
		

	const { email, password } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();

		dispatch(login({ email, password }));
	};

	if(isAuthenticated) return <Navigate to='/dashboard' />

    return (
		<Layout title='Auth Site | Login' content='Login page'>
			<div className='Auth-form-container'>
				<form className='Auth-form' onSubmit={onSubmit}>
					<div className="Auth-form-content">
						<h3 className="Auth-form-title">Login</h3>
						<div className="form-group mt-3">
							<label>Email</label>
							<input
								type="email"
								name='email'
								onChange={onChange}
								value={email}
								required
								className="form-control mt-1"
							/>
						</div>
						<div className="form-group mt-3">
							<label>Password</label>
							<input
								type="password"
								name='password'
								onChange={onChange}
								value={password}
								required
								className="form-control mt-1"
							/>
						</div>					
					
					{loading ? (
						<div className="d-grid gap-2 mt-3">
							<div className='spinner-border text-primary text-center' role='status'>
								<span className='visually-hidden'>Loading...</span>
							</div>
						</div>
					) : (
						<div className="d-grid gap-2 mt-3">
							<button type="submit" className="btn btn-primary">
								Login
							</button>
					  	</div>
					)}
					</div>
				</form>
			</div>
		</Layout>
	);
}

export default LoginPage;