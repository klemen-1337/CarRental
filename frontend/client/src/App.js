import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifyAuth } from 'features/user';
import { ProtectedRoute } from "./components/ProtectedRoute";
import HomePage from 'containers/HomePage';
import DashboardPage from 'containers/DashboardPage';
import LoginPage from 'containers/LoginPage';
import RegisterPage from 'containers/RegisterPage';
import ProfilePage from 'containers/ProfilePage';
import NotFoundPage from 'containers/404';

const App = () => {

	const dispatch = useDispatch();

	useEffect(() =>{
		dispatch(verifyAuth());
	}, [dispatch]);

	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />

				<Route path='/dashboard' element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
				<Route path='/profile' element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
				
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
};

export default App;