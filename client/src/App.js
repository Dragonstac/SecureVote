import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Footer from './components/Footer/Footer';

function App() {
	return (
		
		<Router>
			<GlobalStyle />
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home/>} />
				<Route exact path="/signup" element={<SignUp/>} />
				<Route exact path="/pricing" element ={<Pricing/>} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
