import React from 'react';
import {BrowserRouter as Router,Route,IndexRoute,Link,IndexLink} from 'react-router';
import {createHistory,useBasename} from 'history';

import Footer from './footer.js';
require('../css/comment.css');
require('../css/publicNav.css');
require('../css/baidiui.css');
require('../css/style.css');
require('../css/date.css');

const ACTIVE = {color:'red'};
class App extends React.Component{
	render(){
		return(
			<div className="mp_wrap bui_wrap">
				<div className="mp_pagebox_home">
					{this.props.children}
					<div className="mp_page_footer">
						<Footer/>
					</div>
				</div>
			</div>
			
		);
	}
};
export default App;

