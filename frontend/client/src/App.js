// //App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './screens/Home';
// import Login from './screens/Login';
// import Menu from './screens/Menu.js';
// import Signup from './screens/Signup.js'


// import './App.css'; // Import the CSS file
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// const App = () => {
// 	return (
// 		<>
// 			<Router>
// 				<div>
// 					<Routes>
// 						<Route exact path="/" element={<Home />} />
// 						<Route path='/register' element={<Signup/>}/>
// 						<Route exact path="/login" element={<Login />} />
// 						<Route exact path="/menu" element={<Menu />} />
// 					</Routes>
// 				</div>
// 			</Router>
// 		</>
// 	);
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Menu from './screens/Menu';
import Signup from './screens/Signup';
import Navbar from './components/Navbar';
import { AuthProvider } from './contexts/AuthContext';

import './App.css'; // Import the CSS file
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/register" element={<Signup />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/menu" element={<Menu />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
