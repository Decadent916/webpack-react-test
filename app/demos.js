import React from 'react';
import Demo1 from './demo1.js';
import Demo2 from './demo2.js';
class Demos extends React.Component{
	render(){
		return(
			<div>
				<Demo1/>
				<Demo2/>
			</div>
		)
	}
}
export default Demos;