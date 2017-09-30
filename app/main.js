import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,IndexRoute,Link,IndexLink}from 'react-router-dom';
import {createHistory,useBasename} from 'history';

import Demos from './demos.js';
import Demo1 from './demo1.js';
import App from './app.js';
import Mall from './mall.js';
import Circle from './circle.js';
import CircleType from './circleType.js';
import My from './my.js';
import MyNav from './myNav.js';
import MyUserCenter from './myUserCenter.js';
import MemberClub from './memberClub.js';
import Index from './index.js';
import Type from './type.js';
import CircleTip from './circleTip.js';
import CircleSay from './circleSay.js';


//const history=useBasename(createHistory)({
//	 basename: '/React-Router'
//});
ReactDom.render(
	(
		<Router>
			<Route path="/" component={App}>
				<IndexRoute component={Index} />
				<Route path="/type/:typeName" component={Type}/>
				<Route path="/mall" component={Mall}>
					<Route path="type/:typeName" component={Type}/>
				</Route>
				<Route path="/my" component={My}>
					<IndexRoute component={MyNav}/>
					<Route path="userCenter" component={MyUserCenter}/>
					<Route path="memberClub" component={MemberClub}/>
				</Route>
				<Route path="/circle" component={Circle}>
					<IndexRoute component={CircleType}/>
					<Route path="tip/:tipName" component={CircleTip}/>
					<Route path="say" component={CircleSay}/>
				</Route>
			</Route>
			<Route path="/demos" component={Demos}/>
			<Route path="/demo1" component={Demo1}/>
		</Router>
	),
	document.getElementById('root')
);

