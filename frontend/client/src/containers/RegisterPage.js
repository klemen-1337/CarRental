import { useState } from 'react';
import Layout from 'components/Layout';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from 'features/user';

import '../App.css';

const RegisterPage = () => {
	const dispatch = useDispatch();
	const { registered, loading } = useSelector(state => state.user);

	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const { username, email, password } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();

		dispatch(register({ username, email, password }));
	};

	if (registered) return <Navigate to='/login' />;

	return (
		<Layout title='Auth Site | Register' content='Register page'>

			<div className='Auth-form-container'>
				<form className='Auth-form' onSubmit={onSubmit}>

					<div className="Auth-form-content">
						<h3 className="Auth-form-title">Register for an account</h3>

						<div className="form-group mt-3">
							<label>Username</label>
							<input
								type="text"
								name='username'
								onChange={onChange}
								value={username}
								required
								className="form-control mt-1"
							/>
						</div>
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
								Register
							</button>
					  	</div>
					)}
					</div>
				</form>
			</div>
		</Layout>
	);
};

export default RegisterPage;