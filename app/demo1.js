import React from 'react';
function Tishi(props){
	if(props.wendu>=100){
		return <p>水会烧开</p>;
	}else{
		return <p>水不会烧开</p>;
	}
};
const wenduName={
	c:'摄氏温度',
	f:'华氏温度'
};
class Wendushuru extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	};
	handleChange(e){
		this.props.onWenduzhuanhuan(e.target.value);
	};
	render(){
		const wendu = this.props.wendu;
		const wenduyangshi = this.props.wenduyangshi;
		return(
			<fieldset>
				<legend>请输入一个{wenduName[wenduyangshi]}温度</legend>
				<input value={wendu} onChange={this.handleChange} />
			</fieldset>
		);
	}
};
function toSheshi(huashi){
	return (huashi-32)*5/9;
};
function toHuashi(sheshi){
	return (sheshi*9/5)+32;
};
function tryConvert(wendu,zhuanhuan){
	const input = parseFloat(wendu);
	if(Number.isNaN(input)){
		return "";
	}
	const output = zhuanhuan(input);
	const rounded = Math.round(output*1000)/1000;
	return rounded.toString();
};
class Demo1 extends React.Component{
	constructor(props) {
	    super(props);
	    this.handleSheshiChange = this.handleSheshiChange.bind(this);
	    this.handleHuashiChange = this.handleHuashiChange.bind(this);
	    this.state={wendu:'',wenduyangshi:'c'};
	};
	handleSheshiChange(wendu){
		this.setState({
			wenduyangshi:'c',
			wendu
		});
	};
	handleHuashiChange(wendu){
		this.setState({
			wenduyangshi:'f',
			wendu
		});
	};
	render(){
		const wenduyangshi=this.state.wenduyangshi;
		const wendu = this.state.wendu;
		const sheshi=wenduyangshi==='f'?tryConvert(wendu,toSheshi):wendu;
		const huashi=wenduyangshi==='c'?tryConvert(wendu,toHuashi):wendu;
		return(
			<div>
				<Wendushuru wenduyangshi='c' wendu={sheshi} onWenduzhuanhuan={this.handleSheshiChange}/>
				<Wendushuru wenduyangshi='f' wendu={huashi} onWenduzhuanhuan={this.handleHuashiChange}/>
				<Tishi wendu={parseFloat(sheshi)}/>
			</div>
		);
	}
}
export default Demo1;