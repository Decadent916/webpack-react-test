import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link}from 'react-router-dom';

import Demos from './demos.js';
import Demo1 from './demo1.js';
ReactDom.render(
	(
		<Router>
			<div>
				<Route exact path="/" component={Demos}/>
				<Route path="/demo1" component={Demo1}/>
			</div>
			
		</Router>
	),
	document.getElementById('root')
);

