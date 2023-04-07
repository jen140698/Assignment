import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Link, Switch, useLocation } from 'react-router-dom';
import { Dashboard } from './container/Dashboard';
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
function App() {

	return (
		<>
			<Navbar />
			<div className={'row m-0'}>
				<div className='col-lg-3 col-md-3 bg-light p-0'>
					<Sidebar />
				</div>
				<div className={'col-lg-9 col-md-9 col-sm-12 bg-light p-0'}>
					<BrowserRouter>
						<Switch>
							<Route exact path='/' component={Dashboard}></Route>
						</Switch>
					</BrowserRouter>
				</div>
			</div>


		</>
	);
}

export default App;
