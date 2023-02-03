import { useSelector } from 'react-redux';
import Layout from 'components/Layout';
import { useState, useEffect } from 'react';
import { fetchCars, postCar } from 'features/cars';

const DashboardPage = () => {
	
	const [vehicles, setVehicles] = useState([]);
	const { isAuthenticated, user, loading } = useSelector(state => state.user);
	
	useEffect(() => {
		if(isAuthenticated){
			const getCars = async () => setVehicles(await fetchCars());
			getCars();
		}
	}, [isAuthenticated]);

	const [formData, setFormData] = useState({
		carName: '',
		make: '',
		model: '',
		year: '',
		vin: '',
	});

	const { carName, make, model, year, vin } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();		
		postCar(formData, user);
	};


	return (
		<Layout title='Auth Site | Dashboard' content='Dashboard page'>
			{loading || user === null ? (
				<div className='spinner-border text-primary' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			) : (
				<>
					<h1 className='mb-5'>Vehicle List</h1>
					<div className='row'>
						{vehicles.map(vehicle => (
							<span style={{listStyle: "none"}} key={vehicle.id}>
								<div className="card w-25">
									<img className="card-img-top" src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg" alt="Card cap" />
									<div className="card-body">
										<h5 className="card-title">{vehicle.make} ({vehicle.model}) - {vehicle.year}</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary me-2">Edit</a>
										<a href="#" className="btn btn-danger">Delete</a>
									</div>
								</div>
							</span>
						))}					
					</div>
					<div className='Auth-form-container'>
						<form className='Auth-form' onSubmit={onSubmit}>
							<div className="Auth-form-content">
								<h3 className="Auth-form-title">Add vehicle</h3>
								<div className="form-group mt-3">
									<label>Name</label>
									<input
										type="carName"
										name='carName'
										onChange={onChange}
										value={carName}
										required
										className="form-control mt-1"
									/>
								</div>
								<div className="form-group mt-3">
									<label>Make</label>
									<input
										type="make"
										name='make'
										onChange={onChange}
										value={make}
										required
										className="form-control mt-1"
									/>
								</div>
								<div className="form-group mt-3">
									<label>Model</label>
									<input
										type="model"
										name='model'
										onChange={onChange}
										value={model}
										required
										className="form-control mt-1"
									/>
								</div>
								<div className="form-group mt-3">
									<label>year</label>
									<input
										type="year"
										name='year'
										onChange={onChange}
										value={year}
										required
										className="form-control mt-1"
									/>
								</div>
								<div className="form-group mt-3">
									<label>Vin</label>
									<input
										type="vin"
										name='vin'
										onChange={onChange}
										value={vin}
										required
										className="form-control mt-1"
									/>
								</div>												
								<div className="d-grid gap-2 mt-3">
									<button type="submit" className="btn btn-primary">
										Add
									</button>
								</div>
							
							</div>
						</form>
					</div>
				</>
			)}
		</Layout>
	);

	
};

export default DashboardPage;