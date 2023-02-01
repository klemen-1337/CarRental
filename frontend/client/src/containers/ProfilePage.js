import { useSelector } from 'react-redux';
import Layout from 'components/Layout';

const ProfilePage = () => {
	const { user, loading } = useSelector(state => state.user);

	return (
		<Layout title='Auth Site | Profile' content='Profile page '>
			{loading || user === null ? (
				<div className='spinner-border text-primary' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			) : (
				<>
					<h1 className='mb-5'>Profile</h1>
					<p>User Details</p>
					<ul>
						<li>Username: {user.username}</li>
						<li>Email: {user.email}</li>
					</ul>
				</>
			)}
		</Layout>
	);
};

export default ProfilePage;