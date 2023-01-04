import Layout from 'components/Layout';

const DashboardPage = () => {

	return (
		<Layout title='Auth Site | Dashboard' content='Dashboard page'>
				<>
				    <h1 className='mb-5'>Dashboard</h1>
					<p>User Details</p>
					<ul>
						<li>Username:</li>
						<li>Email:</li>
					</ul>
				</>
		</Layout>
	);
}

export default DashboardPage;