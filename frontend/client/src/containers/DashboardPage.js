import { useSelector } from 'react-redux';
import Layout from 'components/Layout';
import { useState, useEffect } from 'react';
import { fetchCars } from 'features/cars';

const DashboardPage = () => {
	
	const [vehicles, setVehicles] = useState([]);
	const { isAuthenticated, user, loading } = useSelector(state => state.user);
	
	useEffect(() => {
		if(isAuthenticated){
			const getCars = async () => setVehicles(await fetchCars());
			getCars();
		}
	}, [isAuthenticated]);

	return (
		<Layout title='Auth Site | Dashboard' content='Dashboard page'>
			{loading || user === null ? (
				<div className='spinner-border text-primary' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			) : (
				<>
					<h1 className='mb-5'>Vehicle List</h1>
					<ul>
						{vehicles.map(vehicle => (
							<li key={vehicle.id}>
							{vehicle.id} {vehicle.name} ({vehicle.alias})
							</li>
						))}
					</ul>
				</>
			)}
		</Layout>
	);

	
};

export default DashboardPage;