import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/index.jsx';
import Register from './routes/Register/index.jsx';
import Login from './routes/Login/index.jsx';
import Dashboard from './routes/Dashboard/index.jsx';
import DashboardHome from './routes/Dashboard/childrenRoutes/DashboardHome';
import DashboardProfile from './routes/Dashboard/childrenRoutes/DashboardProfile';
import DashboardStatistics from './routes/Dashboard/childrenRoutes/DashboardStatistics';
import DashboardQuoter from './routes/Dashboard/childrenRoutes/DashboardQuoter';
import DashboardChasis from './routes/Dashboard/childrenRoutes/DashboardChasis';
import DashboardClose from './routes/Dashboard/childrenRoutes/DashboardClose/index.jsx';
import ProtectedRoute from './routes/ProtectedRoute/index.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import ErrorPage from './routes/ErrorPage/index.jsx';
import GoogleAuth from './routes/googleAuth/index.jsx';
import ChasisDetail from './routes/Dashboard/childrenRoutes/DashboardChasis/childrenRoutes/ChasisDetail';
import ChasisDetailDual from './routes/Dashboard/childrenRoutes/DashboardChasis/childrenRoutes/ChasisDetailDual';
import PrivacyPolicy from './routes/PrivacyPolicy';
import ForgetPass from './routes/Login/ForgetPass/index.jsx';
import RecoveryPass from './routes/Login/RecoveryPass/index.jsx';
import ListUserAdmin from './routes/Dashboard/childrenRoutes/ListUserAdmin/index.jsx';
import ChasisIntermediate from './components/ChasisIntermediate';

const router = createBrowserRouter([
	{ path: '/', element: <Home />, errorElement: <ErrorPage /> },

	{ path: '/register', element: <Register />, errorElement: <ErrorPage /> },
	{ path: '/login', element: <Login />, errorElement: <ErrorPage /> },
	{ path: '/forget-pass', element: <ForgetPass /> },
	{ path: '/recovery-pass/:token', element: <RecoveryPass /> },
	{
		path: '/privacy-policy',
		element: <PrivacyPolicy />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/googleAuth/auth/callback',
		element: <GoogleAuth />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/',
		element: <ProtectedRoute />,
		children: [
			{
				path: 'dashboard',
				element: <Dashboard />,
				errorElement: <ErrorPage />,
				children: [
					{ index: true, element: <DashboardHome /> },
					{ path: 'home', element: <DashboardHome /> },
					{ path: 'profile', element: <DashboardProfile /> },
					{ path: 'list-user', element: <ListUserAdmin /> },
					{ path: 'statistics', element: <DashboardStatistics /> },
					{ path: 'quoter', element: <DashboardQuoter /> },
					{
						path: 'chasis',
						element: <DashboardChasis />,
						children: [
							{ path: ':id', element: <ChasisIntermediate /> },
							{ path: ':id/year/:year', element: <ChasisDetail /> },
							{ path: ':id/type/:type', element: <ChasisIntermediate /> },
							{ 
								path: ':id/type/:type/payment/:payment', 
								element: <ChasisDetail />
							},
							{ 
								path: ':id/type/imaginaser/payment/:payment', 
								element: <ChasisDetailDual />
							},
						],
					},
					{ path: 'close', element: <DashboardClose /> },
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<RouterProvider router={router} />
	</AuthProvider>,
);
