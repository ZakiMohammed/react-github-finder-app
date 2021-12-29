import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import User from './pages/User';
import Alert from './components/layout/Alert';
import { AlertProvider } from './context/AlertContext';
import { GithubProvider } from './context/GithubContext';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

function App() {
	return (
		<GithubProvider>
			<AlertProvider>
				<Router>
					<div className='flex flex-col justify-between h-screen'>
						<Navbar title='Github Finder' />

						<main className='container mx-auto px-3 pb-12'>
							<Alert />
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/about' element={<About />} />
								<Route path='/user/:login' element={<User />} />
								<Route path='/notfound' element={<NotFound />} />
								<Route path='/*' element={<NotFound />} />
							</Routes>
						</main>

						<Footer />
					</div>
				</Router>
			</AlertProvider>
		</GithubProvider>
	);
}

export default App;
